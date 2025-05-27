import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../modules/login/Login';
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Add other routes here later */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
