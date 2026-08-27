import { NextRequest, NextResponse } from 'next/server';
import { processAssessment } from '@/lib/pipeline/process';

export const runtime = 'nodejs';
// Multi-page, high-resolution OCR may exceed the default serverless window.
export const maxDuration = 300;

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData();
    const questionPaper = form.get('questionPaper'); const answerSheet = form.get('answerSheet');
    if (!(questionPaper instanceof File) || !(answerSheet instanceof File)) return NextResponse.json({ error: 'Both files are required.' }, { status: 400 });
    if (questionPaper.size > 20_000_000 || answerSheet.size > 20_000_000) return NextResponse.json({ error: 'Files must be 20 MB or smaller.' }, { status: 413 });
    if (!/^(application\/pdf|image\/)/.test(questionPaper.type) || !/^(application\/pdf|image\/)/.test(answerSheet.type)) return NextResponse.json({ error: 'Only PDF, PNG and JPEG files are supported.' }, { status: 415 });
    return NextResponse.json(await processAssessment(questionPaper, answerSheet));
  } catch (error) { console.error('Assessment processing failed', error); return NextResponse.json({ error: error instanceof Error ? error.message : 'Processing failed.' }, { status: 500 }); }
}
