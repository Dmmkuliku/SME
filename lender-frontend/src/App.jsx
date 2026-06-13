import { Navigate, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import SmeListPage from './pages/SmeListPage';
import SmeDetailPage from './pages/SmeDetailPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ReportsPage from './pages/ReportsPage';
import AppLayout from './layouts/AppLayout';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' replace />} />
      <Route path='/login' element={<AuthPage />} />
      <Route element={<AppLayout />}>
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/smes' element={<SmeListPage />} />
        <Route path='/smes/:id' element={<SmeDetailPage />} />
        <Route path='/analytics' element={<AnalyticsPage />} />
        <Route path='/reports' element={<ReportsPage />} />
      </Route>
    </Routes>
  );
}
