import { BarChart3, Bell, FileText, LayoutDashboard, ShieldCheck, Users } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/smes', label: 'SMEs', icon: Users },
  { to: '/analytics', label: 'Risk Analytics', icon: BarChart3 },
  { to: '/reports', label: 'Reports', icon: FileText },
];

export default function AppLayout() {
  return (
    <div className='min-h-screen bg-grid-soft'>
      <div className='mx-auto grid min-h-screen max-w-[1680px] lg:grid-cols-[290px_1fr]'>
        <aside className='border-r border-white/10 bg-slate-950/85 px-6 py-8 backdrop-blur-xl'>
          <div className='rounded-3xl border border-blue-400/20 bg-blue-500/10 p-5 shadow-glow'>
            <p className='text-sm uppercase tracking-[0.25em] text-blue-100'>Lender Risk Intelligence</p>
            <h1 className='mt-3 text-2xl font-semibold text-white'>Data-driven lending decisions</h1>
          </div>
          <nav className='mt-8 space-y-2'>
            {links.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? 'bg-blue-500 text-white shadow-glow' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`
                }
              >
                <Icon size={18} />
                {label}
              </NavLink>
            ))}
          </nav>
          <div className='mt-8 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300'>
            <p className='inline-flex items-center gap-2 font-medium text-white'><ShieldCheck size={16} /> ML connection ready</p>
            <p className='mt-2'>All data calls are isolated in <code className='text-blue-200'>src/lib/api.js</code> for easy backend integration.</p>
          </div>
        </aside>

        <main className='px-5 py-5 md:px-8 lg:px-10'>
          <div className='mb-8 flex flex-col gap-4 rounded-[28px] border border-white/10 bg-slate-950/60 px-6 py-5 shadow-panel backdrop-blur xl:flex-row xl:items-center xl:justify-between'>
            <div>
              <p className='text-sm text-slate-400'>Portfolio command center</p>
              <h2 className='mt-1 text-2xl font-semibold text-white'>Tanzania SME Lending Desk</h2>
            </div>
            <div className='flex items-center gap-3'>
              <div className='rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm font-medium text-emerald-200'>Portfolio risk down 14%</div>
              <button className='rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-white'>
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
