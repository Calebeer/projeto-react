import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

// import { Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Empresa from "./pages/Empresa"
import Contato from "./pages/Contato"
import Boti from './components/Boti';
import Mensagem from './components/Mensagem';

function App() { 

  return (
    // <Router>
    // <div>

    //   {/* Cabeçalho */}
    //   <nav>
    //     <div style={{ display:'flex'}}>
    //       <div>
    //         <Link to="/">Home</Link>
    //       </div>
    //       <div>
    //         <Link to="/empresa">empresa</Link>
    //       </div>
    //       <div>
    //         <Link to="/contato">contato</Link>
    //       </div>
    //     </div>
    //   </nav>

    //   {/* Corpo */}
    //   <div style={{backgroundColor:'red'}}>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/empresa" element={<Empresa />} />
    //       <Route path="/contato" element={<Contato />} />
    //     </Routes>
    //   </div>

    //   {/* Footer */}
    //   <div style={{backgroundColor:'pink'}}>
    //     Footer
    //   </div>
      

    //   </div>
    // </Router>

    <Mensagem/>
  );
}

export default App;
