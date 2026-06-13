import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ChartCard from '../components/ChartCard';
import SectionHeader from '../components/SectionHeader';
import { lenderApi } from '../lib/api';

const colors = ['#60a5fa', '#8b5cf6', '#ef4444'];

export default function AnalyticsPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    lenderApi.getAnalytics().then(setData);
  }, []);

  if (!data) return <div className='text-slate-300'>Loading analytics...</div>;

  return (
    <div>
      <SectionHeader
        eyebrow='Deep analytics'
        title='Behavioral clusters, anomalies, and regional signals'
        description='This page reflects the more advanced ML story: clustering, anomaly detection, and portfolio diagnostics.'
      />

      <div className='grid gap-6 xl:grid-cols-2'>
        <ChartCard title='Average score by region' description='High-level regional signal for portfolio strategy.'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart data={data.byRegion}>
              <CartesianGrid stroke='rgba(148,163,184,0.14)' vertical={false} />
              <XAxis dataKey='region' tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar dataKey='score' fill='#60a5fa' radius={[14, 14, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title='Behavioral clusters' description='Useful for unsupervised learning storytelling and segmentation.'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart data={data.behavioralClusters}>
              <CartesianGrid stroke='rgba(148,163,184,0.14)' vertical={false} />
              <XAxis dataKey='cluster' tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} interval={0} angle={-10} height={80} />
              <YAxis tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar dataKey='count' radius={[14, 14, 0, 0]}>
                {data.behavioralClusters.map((entry, index) => <Cell key={entry.cluster} fill={colors[index % colors.length]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className='mt-6 rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-panel'>
        <h3 className='text-lg font-semibold text-white'>Anomaly detection signals</h3>
        <div className='mt-6 h-80'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart data={data.anomalySignals} layout='vertical' margin={{ left: 50 }}>
              <CartesianGrid stroke='rgba(148,163,184,0.14)' horizontal={false} />
              <XAxis type='number' tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis dataKey='name' type='category' tick={{ fill: '#cbd5e1' }} axisLine={false} tickLine={false} width={160} />
              <Tooltip />
              <Bar dataKey='value' fill='#ef4444' radius={[0, 14, 14, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
