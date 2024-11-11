import Header from './components/Header/Header';
import Home from './components/home/home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
 
  return (
    <div>
      <Router >
      <Header/> 
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
