import axios from 'axios';
import { analytics, getSmeById, overview, reports, smes } from '../data/mockData';

const useMock = import.meta.env.VITE_USE_MOCK_DATA !== 'false';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
  timeout: 10000,
});

const wait = (payload) => new Promise((resolve) => setTimeout(() => resolve(payload), 250));

export const lenderApi = {
  getOverview: () => useMock ? wait(overview) : api.get('/lender/overview').then((r) => r.data),
  getSmes: () => useMock ? wait(smes) : api.get('/lender/smes').then((r) => r.data),
  getSmeDetail: (id) => useMock ? wait(getSmeById(id)) : api.get(`/lender/smes/${id}`).then((r) => r.data),
  getAnalytics: () => useMock ? wait(analytics) : api.get('/lender/analytics').then((r) => r.data),
  getReports: () => useMock ? wait(reports) : api.get('/lender/reports').then((r) => r.data),
};
