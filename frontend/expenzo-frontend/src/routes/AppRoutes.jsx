import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../modules/login/login';
import Dashboard from '../modules/dashboard/dashboard';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;

 
  
  
  
  
  
  
  
  
  
  