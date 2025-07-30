import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "../modules/login/Login";
import Dashboard from '../modules/dashboard/Dash';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;

 
  
  
  
  
  
  
  
  
  
  