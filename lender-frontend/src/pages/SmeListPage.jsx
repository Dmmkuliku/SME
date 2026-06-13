import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { lenderApi } from '../lib/api';

export default function SmeListPage() {
  const [items, setItems] = useState([]);
  const [riskFilter, setRiskFilter] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    lenderApi.getSmes().then(setItems);
  }, []);

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const riskMatch = riskFilter === 'All' || item.risk === riskFilter;
      const searchMatch = item.name.toLowerCase().includes(search.toLowerCase()) || item.region.toLowerCase().includes(search.toLowerCase());
      return riskMatch && searchMatch;
    });
  }, [items, riskFilter, search]);

  return (
    <div>
      <SectionHeader
        eyebrow='SME decision table'
        title='Browse, filter, and inspect businesses'
        description='A review-friendly table for underwriting teams, with direct navigation to each SME profile.'
        action={
          <div className='flex flex-wrap gap-3'>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder='Search SME or region'
              className='rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400'
            />
            <select value={riskFilter} onChange={(event) => setRiskFilter(event.target.value)} className='rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400'>
              {['All', 'Low', 'Medium', 'High'].map((item) => <option key={item} className='bg-slate-950'>{item}</option>)}
            </select>
          </div>
        }
      />

      <div className='overflow-hidden rounded-3xl border border-white/10 bg-slate-900/75 shadow-panel'>
        <div className='overflow-x-auto'>
          <table className='min-w-full text-left text-sm'>
            <thead className='bg-white/5 text-slate-300'>
              <tr>
                {['SME Name', 'Region', 'Sector', 'Credit Score', 'Risk', 'Default Probability', 'Recommendation', 'Action'].map((header) => (
                  <th key={header} className='px-5 py-4 font-medium'>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id} className='border-t border-white/5 text-slate-200'>
                  <td className='px-5 py-4 font-medium text-white'>{item.name}</td>
                  <td className='px-5 py-4'>{item.region}</td>
                  <td className='px-5 py-4'>{item.sector}</td>
                  <td className='px-5 py-4'>{item.score}</td>
                  <td className='px-5 py-4'>
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${item.risk === 'Low' ? 'bg-emerald-400/10 text-emerald-200' : item.risk === 'Medium' ? 'bg-amber-400/10 text-amber-200' : 'bg-red-400/10 text-red-200'}`}>{item.risk}</span>
                  </td>
                  <td className='px-5 py-4'>{item.defaultProbability}</td>
                  <td className='px-5 py-4'>{item.recommendation}</td>
                  <td className='px-5 py-4'>
                    <Link to={`/smes/${item.id}`} className='rounded-2xl bg-blue-500 px-4 py-2 text-xs font-semibold text-white'>Open profile</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
