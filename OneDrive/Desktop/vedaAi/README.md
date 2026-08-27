# VedaAI — Assessment Extraction & Answer Mapping

VedaAI gives teachers a review workspace for question papers and handwritten answer sheets. It preserves question numbering, maps answer regions, flags skipped/unmatched responses, and presents grade feedback beside the original scan.

## Run locally

1. Install Node.js 20.9+.
2. Copy `.env.example` to `.env.local` and set `GEMINI_API_KEY`.
3. Run `npm install`, then `npm run dev`.
4. Open `http://localhost:3000`. Use **Explore interactive demo** to inspect the full reviewer flow without an API key.

## Architecture

`question paper → Gemini structured extraction → Question[]`

`answer sheet → PDF rasterisation / Tesseract OCR → OCRBlock[] → answer segmentation → AnswerSegment[]`

`questions + segments → exact/fuzzy numbering + semantic scoring + Gemini adjudication → AnswerMapping[] → grading`

The domain contracts are in `lib/types`. `lib/mapping/engine.ts` implements deterministic first-pass mapping so exact matching remains fast and explainable. `lib/llm/gemini.ts` is the single Gemini boundary and only reads `GEMINI_API_KEY` server-side. The `app/api/process` endpoint validates paired files and the model connection, returning typed, safe errors.

## Production OCR integration

For each PDF page, render with `pdfjs-dist` at 2x resolution (after rotation detection), run Tesseract word-level recognition, and normalize every word’s pixel box to the page’s 0–100 coordinate space. Segment consecutive OCR blocks until another question label is recognized; preserve all boxes when merging page continuations. Pass only low-confidence candidates to Gemini for JSON adjudication. This keeps answers highlighted with the source OCR geometry rather than inferred positions.

## Edge-case policy

- Normalizes `11a`, `11-a`, and `11(a)` before matching.
- Leaves absent mappings as `unanswered`; never fabricates an answer.
- Retains unused segments as `unmatched` for teacher review.
- Merges adjacent unlabelled blocks across page boundaries.
- Uses confidence thresholds to surface uncertain matches rather than silently accepting them.
- Rejects missing paired uploads and files over 20 MB with actionable errors.

## Deployment

Import the repository into Vercel, set `GEMINI_API_KEY` in Project Settings → Environment Variables, then deploy. No database, auth, or client secret is required. For production-scale OCR, move Tesseract work to a queue/worker because Vercel request duration and memory limits make large scanned PDFs unsuitable for synchronous processing.

## Test fixtures

`fixtures/question-paper.txt` and `fixtures/answer-sheet.txt` provide text fixtures covering subparts, out-of-order answers, a skipped question, and an extra answer. They can be used to unit-test extraction, segmentation, and mapping without calling Gemini.
