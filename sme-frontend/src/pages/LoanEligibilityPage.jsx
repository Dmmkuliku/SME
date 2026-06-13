import { useEffect, useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { smeApi } from '../lib/api';

export default function LoanEligibilityPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    smeApi.getEligibility().then(setData);
  }, []);

  if (!data) return <div className='text-slate-300'>Loading eligibility...</div>;

  return (
    <div>
      <SectionHeader
        eyebrow='Loan readiness'
        title='See how close you are to financing approval'
        description='This view can consume model probability, lender rules, or hybrid decision outputs.'
        action={<div className='rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm font-medium text-emerald-200'>{data.status} • confidence {data.confidence}</div>}
      />

      <div className='grid gap-6 xl:grid-cols-[1fr_1fr]'>
        <div className='rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-panel'>
          <p className='text-sm text-slate-400'>Current financing estimate</p>
          <h3 className='mt-3 text-5xl font-semibold text-white'>{data.amount}</h3>
          <p className='mt-4 text-sm text-slate-300'>The model believes your current records support this approximate financing range.</p>
          <div className='mt-8 space-y-4'>
            {data.checklist.map((item) => (
              <div key={item.task} className='flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200'>
                {item.done ? <CheckCircle2 className='mt-0.5 text-emerald-300' size={18} /> : <Circle className='mt-0.5 text-slate-500' size={18} />}
                <span>{item.task}</span>
              </div>
            ))}
          </div>
        </div>

        <div className='rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-panel'>
          <h3 className='text-lg font-semibold text-white'>Matching lender offers</h3>
          <div className='mt-6 space-y-4'>
            {data.offers.map((offer) => (
              <div key={offer.lender} className='rounded-3xl border border-white/10 bg-white/5 p-5'>
                <div className='flex flex-wrap items-center justify-between gap-3'>
                  <div>
                    <h4 className='text-lg font-semibold text-white'>{offer.lender}</h4>
                    <p className='mt-1 text-sm text-slate-400'>{offer.note}</p>
                  </div>
                  <div className='rounded-2xl bg-teal-500/10 px-4 py-2 text-sm text-teal-100'>Term {offer.term}</div>
                </div>
                <div className='mt-5 flex items-center justify-between text-sm text-slate-300'>
                  <span>Indicative rate</span>
                  <span className='font-semibold text-white'>{offer.rate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
