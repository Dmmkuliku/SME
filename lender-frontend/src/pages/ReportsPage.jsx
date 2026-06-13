import { useEffect, useState } from 'react';
import { Download, FileSpreadsheet, Sparkles } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { lenderApi } from '../lib/api';

export default function ReportsPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    lenderApi.getReports().then(setItems);
  }, []);

  return (
    <div>
      <SectionHeader
        eyebrow='Reports'
        title='Decision-ready summaries and exports'
        description='Use this page for lender reporting, model monitoring notes, or downloadable PDF/CSV links later.'
        action={<button className='inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white'><Download size={16} /> Export summary</button>}
      />
      <div className='grid gap-5 lg:grid-cols-3'>
        {items.map((item, index) => (
          <div key={item.title} className='rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-panel'>
            <div className={`inline-flex rounded-2xl p-3 ${index === 0 ? 'bg-blue-500/10 text-blue-300' : index === 1 ? 'bg-emerald-400/10 text-emerald-300' : 'bg-violet-500/10 text-violet-300'}`}>
              {index === 1 ? <FileSpreadsheet size={18} /> : <Sparkles size={18} />}
            </div>
            <p className='mt-5 text-sm uppercase tracking-[0.2em] text-slate-400'>{item.date}</p>
            <h3 className='mt-3 text-xl font-semibold text-white'>{item.title}</h3>
            <p className='mt-4 text-sm leading-7 text-slate-300'>{item.summary}</p>
            <button className='mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100'>Open report</button>
          </div>
        ))}
      </div>
    </div>
  );
}
