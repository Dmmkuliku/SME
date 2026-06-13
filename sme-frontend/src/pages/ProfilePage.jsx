import { useEffect, useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { smeApi } from '../lib/api';

export default function ProfilePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    smeApi.getProfile().then(setData);
  }, []);

  if (!data) return <div className='text-slate-300'>Loading profile...</div>;

  return (
    <div>
      <SectionHeader
        eyebrow='Business profile'
        title='Profile and data connections'
        description='A simple page for identity, business details, and connected data sources.'
      />
      <div className='grid gap-6 xl:grid-cols-[1fr_1fr]'>
        <div className='rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-panel'>
          <div className='grid gap-4 md:grid-cols-2'>
            {Object.entries(data).filter(([key]) => key !== 'connectedDataSources').map(([key, value]) => (
              <div key={key} className='rounded-2xl border border-white/10 bg-white/5 p-4'>
                <p className='text-sm capitalize text-slate-400'>{key.replace(/([A-Z])/g, ' $1')}</p>
                <p className='mt-2 text-white'>{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-panel'>
          <h3 className='text-lg font-semibold text-white'>Connected sources</h3>
          <div className='mt-5 space-y-3'>
            {data.connectedDataSources.map((source) => (
              <div key={source} className='rounded-2xl border border-teal-400/20 bg-teal-400/10 px-4 py-3 text-sm text-teal-100'>{source}</div>
            ))}
          </div>
          <div className='mt-6 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300'>
            Tip: keep your backend feature names consistent with your ML training schema for smoother integration.
          </div>
        </div>
      </div>
    </div>
  );
}
