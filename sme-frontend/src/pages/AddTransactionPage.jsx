import { useState } from 'react';
import { CheckCircle2, UploadCloud } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { smeApi } from '../lib/api';

const initialForm = {
  counterparty: '',
  amount: '',
  paymentDate: '',
  orderType: 'Distributor',
  deliveryCompleted: 'Yes',
  notes: '',
};

export default function AddTransactionPage() {
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState('');

  const handleChange = (event) => setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await smeApi.createTransaction(form);
    setMessage(response.message || 'Transaction submitted');
    setForm(initialForm);
  };

  return (
    <div>
      <SectionHeader
        eyebrow='Capture new business activity'
        title='Add a transaction'
        description='Use this form to send clean structured data into your backend and ML scoring pipeline.'
      />

      <div className='grid gap-6 xl:grid-cols-[1.15fr_0.85fr]'>
        <form onSubmit={handleSubmit} className='rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-panel'>
          <div className='grid gap-4 md:grid-cols-2'>
            {[
              ['counterparty', 'Customer / buyer name', 'e.g. Kariakoo Retailers'],
              ['amount', 'Transaction amount (TZS)', 'e.g. 2400000'],
              ['paymentDate', 'Expected payment date', ''],
            ].map(([name, label, placeholder]) => (
              <label key={name} className='block'>
                <span className='mb-2 block text-sm text-slate-300'>{label}</span>
                <input
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  type={name === 'paymentDate' ? 'date' : 'text'}
                  className='w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-teal-400'
                />
              </label>
            ))}

            <label className='block'>
              <span className='mb-2 block text-sm text-slate-300'>Customer type</span>
              <select name='orderType' value={form.orderType} onChange={handleChange} className='w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-teal-400'>
                <option className='bg-slate-950'>Distributor</option>
                <option className='bg-slate-950'>Supplier</option>
                <option className='bg-slate-950'>Retailer</option>
              </select>
            </label>

            <label className='block'>
              <span className='mb-2 block text-sm text-slate-300'>Delivery completed?</span>
              <select name='deliveryCompleted' value={form.deliveryCompleted} onChange={handleChange} className='w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-teal-400'>
                <option className='bg-slate-950'>Yes</option>
                <option className='bg-slate-950'>No</option>
              </select>
            </label>
          </div>

          <label className='mt-4 block'>
            <span className='mb-2 block text-sm text-slate-300'>Notes</span>
            <textarea name='notes' value={form.notes} onChange={handleChange} rows='5' className='w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-teal-400' placeholder='Delivery notes, unusual delays, customer comments...' />
          </label>

          <div className='mt-6 flex flex-wrap gap-3'>
            <button type='submit' className='rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950'>Save transaction</button>
            <button type='button' className='inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200'>
              <UploadCloud size={16} /> Import CSV later
            </button>
          </div>

          {message ? (
            <div className='mt-5 inline-flex items-center gap-2 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200'>
              <CheckCircle2 size={16} /> {message}
            </div>
          ) : null}
        </form>

        <div className='space-y-6'>
          <div className='rounded-3xl border border-white/10 bg-white/5 p-6 shadow-panel'>
            <h3 className='text-lg font-semibold text-white'>Why this form matters</h3>
            <ul className='mt-4 space-y-3 text-sm text-slate-300'>
              <li>• Creates model-ready features like payment delay, transaction value, and delivery success.</li>
              <li>• Gives lenders evidence beyond collateral.</li>
              <li>• Makes future score explanations more trustworthy.</li>
            </ul>
          </div>
          <div className='rounded-3xl border border-teal-400/20 bg-teal-400/10 p-6 shadow-glow'>
            <p className='text-sm uppercase tracking-[0.2em] text-teal-100'>Suggested schema</p>
            <pre className='mt-4 overflow-auto rounded-2xl bg-slate-950/70 p-4 text-xs text-slate-200'>{`{
  "counterparty": "string",
  "amount": 2400000,
  "paymentDate": "2026-03-30",
  "orderType": "Distributor",
  "deliveryCompleted": true,
  "notes": "optional"
}`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
