import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Header from './components/shared/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
