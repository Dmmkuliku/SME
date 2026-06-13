import { ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AuthPage() {
  return (
    <div className='min-h-screen bg-grid-soft px-6 py-10'>
      <div className='mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]'>
        <div className='rounded-[36px] border border-white/10 bg-slate-950/75 p-10 shadow-panel'>
          <div className='inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-100'>
            <Shield size={16} /> Risk intelligence for lenders
          </div>
          <h1 className='mt-6 text-5xl font-semibold leading-tight text-white'>Approve smarter with explainable SME credit intelligence.</h1>
          <p className='mt-6 max-w-xl text-lg text-slate-300'>Monitor portfolio risk, inspect individual businesses, and make transparent financing decisions from one modern dashboard.</p>
          <div className='mt-8 flex flex-wrap gap-3 text-sm text-slate-300'>
            <span className='rounded-full border border-white/10 px-4 py-2'>KPI overview</span>
            <span className='rounded-full border border-white/10 px-4 py-2'>Risk analytics</span>
            <span className='rounded-full border border-white/10 px-4 py-2'>Explainable outputs</span>
          </div>
        </div>

        <div className='rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-panel backdrop-blur'>
          <p className='text-sm uppercase tracking-[0.2em] text-slate-400'>Admin sign in</p>
          <div className='mt-6 space-y-4'>
            <label className='block'>
              <span className='mb-2 block text-sm text-slate-300'>Work email</span>
              <input className='w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-blue-400' placeholder='risk.team@bank.co.tz' />
            </label>
            <label className='block'>
              <span className='mb-2 block text-sm text-slate-300'>Password</span>
              <input type='password' className='w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-blue-400' placeholder='••••••••' />
            </label>
            <Link to='/dashboard' className='inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-3 text-sm font-semibold text-white'>
              Enter lender dashboard <ArrowRight size={18} />
            </Link>
          </div>
          <p className='mt-5 text-center text-sm text-slate-400'>Demo login takes you directly into the bank dashboard.</p>
        </div>
      </div>
    </div>
  );
}
