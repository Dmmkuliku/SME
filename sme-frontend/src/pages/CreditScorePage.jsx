import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis, LineChart, Line } from 'recharts';
import SectionHeader from '../components/SectionHeader';
import { smeApi } from '../lib/api';

const colors = ['#2dd4bf', '#5eead4', '#38bdf8', '#f59e0b'];

export default function CreditScorePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    smeApi.getCreditScore().then(setData);
  }, []);

  if (!data) return <div className='text-slate-300'>Loading score...</div>;

  return (
    <div>
      <SectionHeader
        eyebrow='Credit score breakdown'
        title='Understand why your business score looks this way'
        description='This page is designed for explainability so lenders and SMEs can both understand model output.'
        action={<div className='rounded-2xl border border-orange-400/20 bg-orange-400/10 px-4 py-3 text-sm text-orange-100'>Default probability: {(data.probabilityOfDefault * 100).toFixed(0)}%</div>}
      />

      <div className='grid gap-6 xl:grid-cols-[0.9fr_1.1fr]'>
        <div className='rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-panel'>
          <p className='text-sm text-slate-400'>Current score</p>
          <div className='mt-4 flex items-end gap-3'>
            <span className='text-7xl font-semibold text-white'>{data.score}</span>
            <span className='mb-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200'>Healthy range</span>
          </div>
          <p className='mt-6 text-sm text-slate-300'>Your strongest factor is payment timeliness. The model also likes your delivery success and transaction consistency.</p>
        </div>

        <div className='rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-panel'>
          <h3 className='text-lg font-semibold text-white'>Factor contribution</h3>
          <div className='mt-6 h-80'>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart data={data.factors} layout='vertical' margin={{ left: 30 }}>
                <CartesianGrid stroke='rgba(148,163,184,0.14)' horizontal={false} />
                <XAxis type='number' tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <YAxis dataKey='name' type='category' tick={{ fill: '#cbd5e1' }} axisLine={false} tickLine={false} width={130} />
                <Tooltip />
                <Bar dataKey='value' radius={[0, 14, 14, 0]}>
                  {data.factors.map((entry, index) => <Cell key={entry.name} fill={colors[index % colors.length]} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className='mt-6 rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-panel'>
        <h3 className='text-lg font-semibold text-white'>Score trend over time</h3>
        <div className='mt-6 h-80'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={data.history}>
              <CartesianGrid stroke='rgba(148,163,184,0.14)' vertical={false} />
              <XAxis dataKey='month' tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Line dataKey='score' stroke='#2dd4bf' strokeWidth={3} dot={{ fill: '#2dd4bf', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
