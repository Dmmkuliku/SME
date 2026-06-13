import { Navigate, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import AddTransactionPage from './pages/AddTransactionPage';
import CreditScorePage from './pages/CreditScorePage';
import InsightsPage from './pages/InsightsPage';
import LoanEligibilityPage from './pages/LoanEligibilityPage';
import ProfilePage from './pages/ProfilePage';
import AppLayout from './layouts/AppLayout';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' replace />} />
      <Route path='/login' element={<AuthPage />} />
      <Route element={<AppLayout />}>
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/transactions/new' element={<AddTransactionPage />} />
        <Route path='/credit-score' element={<CreditScorePage />} />
        <Route path='/insights' element={<InsightsPage />} />
        <Route path='/loan-eligibility' element={<LoanEligibilityPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}
