import axios from 'axios';
import { eligibility, insights, overview, profile, scoreBreakdown } from '../data/mockData';

const useMock = import.meta.env.VITE_USE_MOCK_DATA !== 'false';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
  timeout: 10000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API error', error);
    return Promise.reject(error);
  }
);

const wait = (payload) => new Promise((resolve) => setTimeout(() => resolve(payload), 250));

export const smeApi = {
  getOverview: () => useMock ? wait(overview) : api.get('/sme/overview').then((r) => r.data),
  getCreditScore: () => useMock ? wait(scoreBreakdown) : api.get('/sme/credit-score').then((r) => r.data),
  getInsights: () => useMock ? wait(insights) : api.get('/sme/insights').then((r) => r.data),
  getEligibility: () => useMock ? wait(eligibility) : api.get('/sme/eligibility').then((r) => r.data),
  getProfile: () => useMock ? wait(profile) : api.get('/sme/profile').then((r) => r.data),
  createTransaction: (payload) => useMock ? wait({ ok: true, message: 'Transaction captured', payload }) : api.post('/sme/transactions', payload).then((r) => r.data),
};
