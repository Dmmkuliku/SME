export const overview = {
  stats: [
    { label: 'Total SMEs', value: '1,248', delta: '+62 this month' },
    { label: 'Low-risk SMEs', value: '712', delta: '57% of portfolio' },
    { label: 'Predicted defaults', value: '49', delta: '-8 vs last month' },
    { label: 'Average score', value: '74.6', delta: '+2.1 points' },
  ],
  riskTrend: [
    { month: 'Oct', low: 410, medium: 220, high: 96 },
    { month: 'Nov', low: 430, medium: 218, high: 92 },
    { month: 'Dec', low: 451, medium: 223, high: 86 },
    { month: 'Jan', low: 495, medium: 210, high: 74 },
    { month: 'Feb', low: 532, medium: 204, high: 61 },
    { month: 'Mar', low: 572, medium: 199, high: 49 },
  ],
  distribution: [
    { name: 'Low risk', value: 57 },
    { name: 'Medium risk', value: 39 },
    { name: 'High risk', value: 4 },
  ],
  recommendations: [
    'Portfolio quality improved due to higher payment consistency across wholesale distributors.',
    'Three high-risk clusters in Dar es Salaam need manual review because transaction spikes look unusual.',
    'The current ML threshold would approve 84 more SMEs with limited increase in expected default exposure.',
  ],
};

export const smes = [
  { id: 'grace-supply-hub', name: 'Grace Supply Hub', region: 'Dar es Salaam', sector: 'Wholesale', score: 81, risk: 'Low', defaultProbability: '12%', recommendation: 'Approve' },
  { id: 'mwanzo-traders', name: 'Mwanzo Traders', region: 'Arusha', sector: 'Retail', score: 66, risk: 'Medium', defaultProbability: '26%', recommendation: 'Review' },
  { id: 'kilimo-link', name: 'Kilimo Link', region: 'Morogoro', sector: 'Agri supply', score: 72, risk: 'Low', defaultProbability: '19%', recommendation: 'Approve' },
  { id: 'upendo-distributors', name: 'Upendo Distributors', region: 'Mwanza', sector: 'Distribution', score: 54, risk: 'High', defaultProbability: '41%', recommendation: 'Reject' },
  { id: 'safi-stores', name: 'Safi Stores', region: 'Dodoma', sector: 'Retail', score: 69, risk: 'Medium', defaultProbability: '24%', recommendation: 'Review' },
];

export const analytics = {
  byRegion: [
    { region: 'Dar', score: 78 },
    { region: 'Arusha', score: 72 },
    { region: 'Mwanza', score: 63 },
    { region: 'Dodoma', score: 68 },
    { region: 'Morogoro', score: 75 },
  ],
  behavioralClusters: [
    { cluster: 'Reliable suppliers', count: 442 },
    { cluster: 'Seasonal traders', count: 289 },
    { cluster: 'At-risk distributors', count: 104 },
    { cluster: 'Emerging growers', count: 226 },
  ],
  anomalySignals: [
    { name: 'Fake transaction suspicion', value: 12 },
    { name: 'Unusual volume spikes', value: 31 },
    { name: 'Repeated payment delays', value: 58 },
  ],
};

export const reports = [
  { title: 'Monthly credit risk outlook', date: 'March 2026', summary: 'Default risk fell by 14% due to better payment patterns.' },
  { title: 'Regional lending opportunity report', date: 'Q1 2026', summary: 'Dar and Morogoro show the strongest loan-readiness growth.' },
  { title: 'Model explainability summary', date: 'March 2026', summary: 'Payment timeliness and transaction consistency remain the top approval drivers.' },
];

export const getSmeById = (id) => {
  const base = smes.find((item) => item.id === id) || smes[0];
  return {
    ...base,
    timeline: [
      { month: 'Oct', score: 68, transactions: 26 },
      { month: 'Nov', score: 70, transactions: 31 },
      { month: 'Dec', score: 71, transactions: 28 },
      { month: 'Jan', score: 75, transactions: 36 },
      { month: 'Feb', score: 78, transactions: 41 },
      { month: 'Mar', score: 81, transactions: 47 },
    ],
    factors: [
      { factor: 'Payment Timeliness', weight: 92 },
      { factor: 'Transaction Consistency', weight: 79 },
      { factor: 'Delivery Success', weight: 88 },
      { factor: 'Repeat Buyer Ratio', weight: 74 },
    ],
    explanation: 'Risk is low because payments are mostly on time, delivery success is high, and transaction patterns are stable across recent months.',
    activity: [
      { label: 'Recent transactions', value: '47 this month' },
      { label: 'On-time payment rate', value: '91%' },
      { label: 'Detected anomalies', value: '1 minor flag' },
      { label: 'Decision confidence', value: '88%' },
    ],
  };
};
