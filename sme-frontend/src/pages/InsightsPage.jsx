import { useEffect, useState } from 'react';
import { AlertTriangle, ArrowUpRight, Sparkles } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { smeApi } from '../lib/api';

export default function InsightsPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    smeApi.getInsights().then(setItems);
  }, []);

  return (
    <div>
      <SectionHeader
        eyebrow='AI explanations'
        title='Business insights translated into action'
        description='Perfect for displaying model explanations, SHAP summaries, or LLM-generated recommendations later.'
      />
      <div className='grid gap-5 lg:grid-cols-3'>
        {items.map((item, index) => (
          <div key={item.title} className='rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-panel'>
            <div className={`inline-flex rounded-2xl p-3 ${index === 0 ? 'bg-emerald-400/10 text-emerald-300' : index === 1 ? 'bg-amber-400/10 text-amber-300' : 'bg-cyan-400/10 text-cyan-300'}`}>
              {index === 0 ? <Sparkles size={18} /> : index === 1 ? <AlertTriangle size={18} /> : <ArrowUpRight size={18} />}
            </div>
            <p className='mt-5 text-sm uppercase tracking-[0.2em] text-slate-400'>{item.tag}</p>
            <h3 className='mt-3 text-xl font-semibold text-white'>{item.title}</h3>
            <p className='mt-4 text-sm leading-7 text-slate-300'>{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
