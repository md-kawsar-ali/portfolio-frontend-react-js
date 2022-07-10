import { Routes, Route } from 'react-router-dom';
import Header from './components/shared/Header';
import Home from './components/pages/Home/Home';
import { Toaster } from 'react-hot-toast';
import Footer from './components/shared/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
