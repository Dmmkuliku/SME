export default function SectionHeader({ eyebrow, title, description, action }) {
  return (
    <div className='mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between'>
      <div>
        {eyebrow ? <p className='text-sm font-medium uppercase tracking-[0.25em] text-blue-300/80'>{eyebrow}</p> : null}
        <h2 className='mt-2 text-2xl font-semibold text-white'>{title}</h2>
        {description ? <p className='mt-2 max-w-3xl text-sm text-slate-400'>{description}</p> : null}
      </div>
      {action}
    </div>
  );
}
