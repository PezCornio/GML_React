import Header from "./componentes/header/header.js"
import Banner from "./componentes/banner/banner.js"
import Separador from "./componentes/separador/separador.js";
import './App.css';
import React from "react";

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Separador titulo="Nuestros cursos:"/>
      <Separador titulo="Nuestro Staff:"/>
      <Separador titulo="Contacto:"/>
    </div>
    
    
  );
}

export default App;
