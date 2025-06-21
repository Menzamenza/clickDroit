import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreationEntreprise from './pages/CreationEntreprise';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/Accueil';
import CreationEtapes from './pages/CreationEtapes';
import Consultation from './pages/ConsultationExpert';
import ConsultationEtapes from './pages/ConsultationEtapes';
import Login from './pages/Connexion';
import Register from './pages/Inscription';
import GestionEntreprise from './pages/GestionEntreprise';
import Apropos from './pages/Apropos';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creation" element={<CreationEntreprise />} />
        <Route path="/creation/:typeId" element={<CreationEtapes />} />
        <Route path="/gestion" element={<GestionEntreprise />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/consultation/etapes" element={<ConsultationEtapes />} />
        <Route path="/propos" element={<Apropos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
