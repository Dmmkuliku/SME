import { Bell, ChevronRight, CircleDollarSign, LayoutDashboard, Lightbulb, ListPlus, Moon, Sun, UserCircle2 } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/transactions/new', label: 'Add Transaction', icon: ListPlus },
  { to: '/credit-score', label: 'Credit Score', icon: CircleDollarSign },
  { to: '/insights', label: 'Score Insights', icon: Lightbulb },
  { to: '/loan-eligibility', label: 'Loan Eligibility', icon: ChevronRight },
  { to: '/profile', label: 'Profile', icon: UserCircle2 },
];

export default function AppLayout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='min-h-screen bg-grid-soft-light dark:bg-grid-soft'>
      <div className='mx-auto grid min-h-screen max-w-[1600px] lg:grid-cols-[280px_1fr]'>
        <aside className='border-r border-gray-200 dark:border-white/10 bg-gray-100/80 dark:bg-slate-950/80 px-6 py-8 backdrop-blur-xl'>
          <div className='rounded-3xl border border-teal-400/20 bg-teal-500/10 p-5 shadow-glow'>
            <p className='text-sm uppercase tracking-[0.25em] text-teal-600 dark:text-teal-200'>SME Credit Companion</p>
            <h1 className='mt-3 text-2xl font-semibold text-gray-900 dark:text-white'>Build trust with your business data</h1>
          </div>
          <nav className='mt-8 space-y-2'>
            {links.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${isActive ? 'bg-teal-500 text-white shadow-glow' : 'text-gray-600 dark:text-slate-300 hover:bg-gray-200/5 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500'}`
                }
              >
                <Icon size={18} />
                {label}
              </NavLink>
            ))}
          </nav>
          <div className='mt-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-100/5 dark:bg-white/5 p-5 text-sm text-gray-600 dark:text-slate-300'>
            <p className='font-medium text-gray-900 dark:text-white'>Model connection ready</p>
            <p className='mt-2'>Update <code className='text-teal-600 dark:text-teal-200'>VITE_API_BASE_URL</code> and switch mock mode off to connect your ML backend.</p>
          </div>
        </aside>

        <main className='px-5 py-5 md:px-8 lg:px-10'>
          <div className='mb-8 flex flex-col gap-4 rounded-[28px] border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-slate-950/60 px-6 py-5 shadow-panel backdrop-blur xl:flex-row xl:items-center xl:justify-between'>
            <div>
              <p className='text-sm text-gray-500 dark:text-slate-400'>Welcome back</p>
              <h2 className='mt-1 text-2xl font-semibold text-gray-900 dark:text-white'>Grace Supply Hub</h2>
            </div>
            <div className='flex items-center gap-3'>
              <div className='rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-100/5 dark:bg-white/5 px-4 py-3 text-sm text-gray-600 dark:text-slate-300'>Loan outlook: <span className='font-semibold text-emerald-600 dark:text-emerald-300'>Positive</span></div>
              <button onClick={toggleTheme} className='rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-100/5 dark:bg-white/5 p-3 text-gray-600 dark:text-slate-300 transition-all duration-200 hover:bg-gray-200/10 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500'>
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              <button className='rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-100/5 dark:bg-white/5 p-3 text-gray-600 dark:text-slate-300 transition-all duration-200 hover:bg-gray-200/10 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500'>
                <Bell size={18} />
              </button>
            </div>
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
