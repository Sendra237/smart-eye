// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import Dashboard from './pages/dashboard';
import SignUpPage from './pages/signup';
import DashboardMobile from './pages/mobiledashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardmob" element={<DashboardMobile />} />
      </Routes>
    </Router>
  );
}

export default App;
