import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BarChart, Bar, CartesianGrid, LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import SectionHeader from '../components/SectionHeader';
import { lenderApi } from '../lib/api';

export default function SmeDetailPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    lenderApi.getSmeDetail(id).then(setData);
  }, [id]);

  if (!data) return <div className='text-slate-300'>Loading SME profile...</div>;

  return (
    <div>
      <SectionHeader
        eyebrow='Individual SME profile'
        title={data.name}
        description='A lender-facing detail page for business history, model factors, and an explainable recommendation.'
        action={<div className={`rounded-2xl px-4 py-3 text-sm font-medium ${data.risk === 'Low' ? 'bg-emerald-400/10 text-emerald-200' : data.risk === 'Medium' ? 'bg-amber-400/10 text-amber-200' : 'bg-red-400/10 text-red-200'}`}>{data.recommendation} • {data.risk} risk</div>}
      />

      <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
        {data.activity.map((item) => (
          <div key={item.label} className='rounded-3xl border border-white/10 bg-white/5 p-5 shadow-panel'>
            <p className='text-sm text-slate-400'>{item.label}</p>
            <p className='mt-3 text-3xl font-semibold text-white'>{item.value}</p>
          </div>
        ))}
      </div>

      <div className='mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]'>
        <div className='rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-panel'>
          <h3 className='text-lg font-semibold text-white'>Transaction + score timeline</h3>
          <div className='mt-6 h-80'>
            <ResponsiveContainer width='100%' height='100%'>
              <LineChart data={data.timeline}>
                <CartesianGrid stroke='rgba(148,163,184,0.14)' vertical={false} />
                <XAxis dataKey='month' tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Line dataKey='score' stroke='#60a5fa' strokeWidth={3} dot={{ fill: '#60a5fa', r: 4 }} />
                <Line dataKey='transactions' stroke='#a78bfa' strokeWidth={3} dot={{ fill: '#a78bfa', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className='rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-panel'>
          <h3 className='text-lg font-semibold text-white'>Feature importance</h3>
          <div className='mt-6 h-80'>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart data={data.factors} layout='vertical' margin={{ left: 10 }}>
                <CartesianGrid stroke='rgba(148,163,184,0.14)' horizontal={false} />
                <XAxis type='number' tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <YAxis dataKey='factor' type='category' tick={{ fill: '#cbd5e1' }} axisLine={false} tickLine={false} width={130} />
                <Tooltip />
                <Bar dataKey='weight' fill='#3b82f6' radius={[0, 14, 14, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className='mt-6 rounded-3xl border border-blue-400/20 bg-blue-500/10 p-6 shadow-glow'>
        <p className='text-sm uppercase tracking-[0.2em] text-blue-100'>Explainability note</p>
        <p className='mt-4 text-sm leading-7 text-slate-100'>{data.explanation}</p>
      </div>
    </div>
  );
}
