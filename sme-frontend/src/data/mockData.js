export const overview = {
  businessName: 'Grace Supply Hub',
  ownerName: 'Grace',
  riskLevel: 'Low Risk',
  score: 81,
  eligibility: 'Pre-qualified up to TZS 18,000,000',
  metrics: [
    { label: 'Credit Score', value: '81 / 100', delta: '+4 this month' },
    { label: 'Transactions', value: '126', delta: '+12% activity' },
    { label: 'Payment Timeliness', value: '91%', delta: '+3.2% improved' },
    { label: 'Loan Readiness', value: 'Strong', delta: '2 checks pending' },
  ],
  transactionTrend: [
    { month: 'Oct', value: 38 },
    { month: 'Nov', value: 45 },
    { month: 'Dec', value: 42 },
    { month: 'Jan', value: 54 },
    { month: 'Feb', value: 61 },
    { month: 'Mar', value: 72 },
  ],
  paymentBehavior: [
    { name: 'On time', value: 78 },
    { name: '1-7 days late', value: 16 },
    { name: '8+ days late', value: 6 },
  ],
  aiInsights: [
    'Your score improved because transactions were more consistent over the last 30 days.',
    'If you maintain current payment timeliness, your financing limit could increase next cycle.',
    'One delayed distributor payment is creating a moderate risk signal—follow up this week.',
  ],
};

export const scoreBreakdown = {
  score: 81,
  probabilityOfDefault: 0.12,
  factors: [
    { name: 'Payment Timeliness', value: 92 },
    { name: 'Delivery Success', value: 88 },
    { name: 'Transaction Consistency', value: 79 },
    { name: 'Repeat Customer Ratio', value: 74 },
  ],
  history: [
    { month: 'Oct', score: 68 },
    { month: 'Nov', score: 70 },
    { month: 'Dec', score: 71 },
    { month: 'Jan', score: 75 },
    { month: 'Feb', score: 78 },
    { month: 'Mar', score: 81 },
  ],
};

export const insights = [
  {
    title: 'Cashflow stability is rising',
    detail: 'The model sees a healthier cashflow pattern due to fewer gaps between orders.',
    tag: 'Positive signal',
  },
  {
    title: 'Late payment cluster detected',
    detail: 'Two buyers paid outside your usual window. This slightly increases short-term risk.',
    tag: 'Watch closely',
  },
  {
    title: 'Seasonal demand advantage',
    detail: 'The platform expects better order volume next month based on your sales history.',
    tag: 'Growth opportunity',
  },
];

export const eligibility = {
  status: 'Eligible',
  amount: 'TZS 18,000,000',
  confidence: '88%',
  checklist: [
    { task: 'Maintain on-time payments above 90%', done: true },
    { task: 'Add 2 more verified delivery records', done: false },
    { task: 'Keep weekly transaction activity consistent', done: true },
    { task: 'Upload latest business registration file', done: false },
  ],
  offers: [
    { lender: 'NMB Growth Desk', term: '6 months', rate: '14.2%', note: 'Best fit for inventory financing' },
    { lender: 'CRDB SME Boost', term: '9 months', rate: '15.0%', note: 'Flexible repayments for distributors' },
  ],
};

export const profile = {
  businessName: 'Grace Supply Hub',
  ownerName: 'Grace M.',
  email: 'grace@example.com',
  phone: '+255 700 000 000',
  location: 'Dar es Salaam, Tanzania',
  sector: 'Wholesale distribution',
  connectedDataSources: ['Transactions API', 'Mobile money exports', 'Delivery log uploads'],
};
