import "./assets/css/reset.css";
import HeaderGML from "./componentes/header/header.js";
import Home from "./pages/Home.jsx";
import Cursos from "./pages/Cursos.jsx";
import Contacto from "./pages/Contacto.jsx";
import FooterGML from "./componentes/footer/footer.js";
import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      
      <Router>
        <HeaderGML />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        <FooterGML />
      </Router>
    </div>
  );
}

export default App;
