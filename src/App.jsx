import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreationEntreprise from './pages/CreationEntreprise';
import Home from './pages/home';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creation" element={<CreationEntreprise />} /> 
        {/* <Route path="/services" element={<Services />} /> etc.pour les autres pages */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
