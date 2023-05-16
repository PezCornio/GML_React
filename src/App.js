import "./assets/css/reset.css"
import Header from "./componentes/header/header.js"
import Home from "./pages/Home.jsx";
import Cursos from "./pages/Cursos.jsx";
import './App.css';
import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cursos' element={<Cursos />} />
        
      </Routes>
      
    </Router>
    
    
  );
}

export default App;
