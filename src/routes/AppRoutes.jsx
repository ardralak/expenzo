import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../modules/login';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;

 
  
  
  
  
  
  
  
  
  
  