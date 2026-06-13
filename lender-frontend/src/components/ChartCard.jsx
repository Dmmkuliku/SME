export default function ChartCard({ title, description, children }) {
  return (
    <div className='rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-panel'>
      <h3 className='text-lg font-semibold text-white'>{title}</h3>
      {description ? <p className='mt-1 text-sm text-slate-400'>{description}</p> : null}
      <div className='mt-6 h-80'>{children}</div>
    </div>
  );
}
