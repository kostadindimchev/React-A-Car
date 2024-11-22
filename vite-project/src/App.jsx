import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/home/home';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import CarsPage from "./components/CarsPage/CarsPage";
import Create from "./components/Create/Create";



function App() {
 
  return (
    <div>
      <Router >
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
