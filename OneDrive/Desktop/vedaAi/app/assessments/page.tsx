import { Suspense } from 'react';
import { AppShell } from '@/components/app-shell';
import { AssessmentsView } from '@/components/assessments-view';
import { Providers } from '@/components/providers';

export default function AssessmentsPage() {
  return (
    <Providers>
      <AppShell>
        <Suspense fallback={<div className="p-8 text-center text-xs text-slate-400">Loading assessments...</div>}>
          <AssessmentsView />
        </Suspense>
      </AppShell>
    </Providers>
  );
}
