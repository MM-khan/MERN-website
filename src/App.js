import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/pages/home';
import Create  from './components/pages/create';
import Navbar from './components/shared/navbar';
import Dashboard from './components/pages/admin/dashboard';
import Login from './components/shared/login';
import Registration from './components/shared/registration';

function App() {
  
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/create" element={<Create />} />
        <Route path = "/register" element={<Registration />} />
        <Route path = "/login" element={<Login />} />
        <Route path = "/admin" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App;
