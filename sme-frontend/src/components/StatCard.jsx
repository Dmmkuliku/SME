export default function StatCard({ label, value, delta }) {
  return (
    <div className='rounded-3xl border border-white/10 bg-white/5 p-5 shadow-panel backdrop-blur'>
      <p className='text-sm text-slate-400'>{label}</p>
      <p className='mt-3 text-3xl font-semibold text-white'>{value}</p>
      <p className='mt-2 text-sm text-emerald-300'>{delta}</p>
    </div>
  );
}
