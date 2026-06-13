import { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ChartCard from '../components/ChartCard';
import SectionHeader from '../components/SectionHeader';
import StatCard from '../components/StatCard';
import { lenderApi } from '../lib/api';

const colors = ['#3b82f6', '#8b5cf6', '#ef4444'];

export default function DashboardPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    lenderApi.getOverview().then(setData);
  }, []);

  if (!data) return <div className='text-slate-300'>Loading dashboard...</div>;

  return (
    <div>
      <SectionHeader
        eyebrow='Executive overview'
        title='Portfolio performance at a glance'
        description='A clean top-level view of SME population, risk distribution, and recommendation signals for lending teams.'
      />

      <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
        {data.stats.map((item) => <StatCard key={item.label} {...item} />)}
      </div>

      <div className='mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]'>
        <ChartCard title='Risk trend over time' description='Shows how low, medium, and high-risk SME counts are moving.'>
          <ResponsiveContainer width='100%' height='100%'>
            <AreaChart data={data.riskTrend}>
              <defs>
                <linearGradient id='lowFill' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='5%' stopColor='#3b82f6' stopOpacity={0.6} />
                  <stop offset='95%' stopColor='#3b82f6' stopOpacity={0} />
                </linearGradient>
                <linearGradient id='mediumFill' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='5%' stopColor='#8b5cf6' stopOpacity={0.55} />
                  <stop offset='95%' stopColor='#8b5cf6' stopOpacity={0} />
                </linearGradient>
                <linearGradient id='highFill' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='5%' stopColor='#ef4444' stopOpacity={0.45} />
                  <stop offset='95%' stopColor='#ef4444' stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke='rgba(148,163,184,0.14)' vertical={false} />
              <XAxis dataKey='month' tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Area type='monotone' dataKey='low' stackId='1' stroke='#60a5fa' fill='url(#lowFill)' strokeWidth={2} />
              <Area type='monotone' dataKey='medium' stackId='1' stroke='#8b5cf6' fill='url(#mediumFill)' strokeWidth={2} />
              <Area type='monotone' dataKey='high' stackId='1' stroke='#ef4444' fill='url(#highFill)' strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title='Current risk distribution' description='Useful for executive reporting and policy review.'>
          <ResponsiveContainer width='100%' height='100%'>
            <PieChart>
              <Pie data={data.distribution} dataKey='value' innerRadius={70} outerRadius={100} paddingAngle={4}>
                {data.distribution.map((entry, index) => <Cell key={entry.name} fill={colors[index % colors.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className='mt-6 rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-panel'>
        <SectionHeader eyebrow='Recommendation feed' title='What the portfolio model is suggesting' description='This section is perfect for surfaced policy alerts or LLM-generated portfolio commentary.' />
        <div className='grid gap-4 lg:grid-cols-3'>
          {data.recommendations.map((item) => (
            <div key={item} className='rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300'>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
