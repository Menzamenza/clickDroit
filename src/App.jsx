import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreationEntreprise from './pages/CreationEntreprise';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/Accueil';
import CreationEtapes from './pages/CreationEtapes';
import Consultation from './pages/ConsultationExpert';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/creation" element={<CreationEntreprise />} /> 
        <Route path="/creation/:typeId" element={<CreationEtapes />} />
        <Route path="/consultation" element={<Consultation />} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
