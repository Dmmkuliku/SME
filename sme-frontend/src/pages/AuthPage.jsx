import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div className='min-h-screen bg-grid-soft px-6 py-10'>
      <div className='mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]'>
        <div className='rounded-[36px] border border-white/10 bg-slate-950/75 p-10 shadow-panel'>
          <div className='inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-2 text-sm text-teal-100'>
            <ShieldCheck size={16} /> AI-powered SME financing
          </div>
          <h1 className='mt-6 text-5xl font-semibold leading-tight text-white'>Turn your business activity into loan-ready trust.</h1>
          <p className='mt-6 max-w-xl text-lg text-slate-300'>Track your transactions, understand your score, and get lender-ready recommendations from your credit intelligence dashboard.</p>
          <div className='mt-8 flex flex-wrap gap-3 text-sm text-slate-300'>
            <span className='rounded-full border border-white/10 px-4 py-2'>Credit score insights</span>
            <span className='rounded-full border border-white/10 px-4 py-2'>Loan readiness guidance</span>
            <span className='rounded-full border border-white/10 px-4 py-2'>Model-friendly API design</span>
          </div>
        </div>

        <div className='rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-panel backdrop-blur'>
          <div className='mb-6 flex gap-3 rounded-2xl bg-slate-900/70 p-2 text-sm'>
            <button onClick={() => setIsSignIn(true)} className={`flex-1 rounded-2xl px-4 py-3 font-medium transition ${isSignIn ? 'bg-teal-500 text-white' : 'text-slate-300'}`}>Sign in</button>
            <button onClick={() => setIsSignIn(false)} className={`flex-1 rounded-2xl px-4 py-3 font-medium transition ${!isSignIn ? 'bg-teal-500 text-white' : 'text-slate-300'}`}>Create account</button>
          </div>
          <div className='space-y-4'>
            {!isSignIn && (
              <label className='block'>
                <span className='mb-2 block text-sm text-slate-300'>Full name</span>
                <input className='w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none ring-0 transition focus:border-teal-400' placeholder='John Doe' />
              </label>
            )}
            <label className='block'>
              <span className='mb-2 block text-sm text-slate-300'>Email address</span>
              <input className='w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none ring-0 transition focus:border-teal-400' placeholder='you@business.co.tz' />
            </label>
            <label className='block'>
              <span className='mb-2 block text-sm text-slate-300'>Password</span>
              <input type='password' className='w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-teal-400' placeholder='••••••••' />
            </label>
            {!isSignIn && (
              <label className='block'>
                <span className='mb-2 block text-sm text-slate-300'>Confirm password</span>
                <input type='password' className='w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-teal-400' placeholder='••••••••' />
              </label>
            )}
            <Link to='/dashboard' className='inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950'>
              {isSignIn ? 'Continue to dashboard' : 'Create account'} <ArrowRight size={18} />
            </Link>
          </div>
          <p className='mt-5 text-center text-sm text-slate-400'>
            {isSignIn ? 'Demo login takes you directly into the SME dashboard.' : 'Create your account to get started with SME financing.'}
          </p>
        </div>
      </div>
    </div>
  );
}
