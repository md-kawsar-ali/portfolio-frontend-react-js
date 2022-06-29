import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Header from './components/shared/Header';
import Portfolio from './components/pages/Portfolio/Portfolio';
import './App.css';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
