import { useEffect, useState } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Area, AreaChart, CartesianGrid } from 'recharts';
import SectionHeader from '../components/SectionHeader';
import StatCard from '../components/StatCard';
import ChartCard from '../components/ChartCard';
import { smeApi } from '../lib/api';

const colors = ['#2dd4bf', '#38bdf8', '#f59e0b'];

export default function DashboardPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    smeApi.getOverview().then(setData);
  }, []);

  if (!data) return <div className='text-slate-300'>Loading dashboard...</div>;

  return (
    <div>
      <SectionHeader
        eyebrow='Business health overview'
        title={`${data.ownerName}, your business is looking ${data.riskLevel.toLowerCase()}`}
        description='A clean view of your performance, payment discipline, and financing readiness—designed to map directly to ML scoring inputs.'
        action={<div className='rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm font-medium text-emerald-200'>{data.eligibility}</div>}
      />

      <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
        {data.metrics.map((item) => <StatCard key={item.label} {...item} />)}
      </div>

      <div className='mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]'>
        <ChartCard title='Transaction trend' description='Rising consistency gives the model stronger evidence of reliable business activity.'>
          <ResponsiveContainer width='100%' height='100%'>
            <AreaChart data={data.transactionTrend}>
              <defs>
                <linearGradient id='fillTrend' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='5%' stopColor='#14b8a6' stopOpacity={0.8} />
                  <stop offset='95%' stopColor='#14b8a6' stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke='rgba(148,163,184,0.14)' vertical={false} />
              <XAxis dataKey='month' tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Area type='monotone' dataKey='value' stroke='#2dd4bf' fill='url(#fillTrend)' strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title='Payment behavior' description='Late-payment patterns strongly influence the score and default probability.'>
          <ResponsiveContainer width='100%' height='100%'>
            <PieChart>
              <Pie data={data.paymentBehavior} dataKey='value' innerRadius={70} outerRadius={100} paddingAngle={4}>
                {data.paymentBehavior.map((entry, index) => <Cell key={entry.name} fill={colors[index % colors.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className='mt-6 rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-panel'>
        <SectionHeader eyebrow='AI insights' title='What the model is seeing right now' description='These text insights can come directly from your ML model or LLM explanation service.' />
        <div className='grid gap-4 lg:grid-cols-3'>
          {data.aiInsights.map((item) => (
            <div key={item} className='rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300'>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
