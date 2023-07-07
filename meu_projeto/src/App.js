

// function App() { 

//   return (
//     <Router>
//       <ul>
//         <li>
//           <Link to="/" >Home</Link>
//         </li>
//         <li>
//           <Link to="/empresa" >Empresa</Link>
//         </li>
//         <li>
//           <Link to="/contato" >Contato</Link>
//         </li>
//       </ul>
//       <Switch>
//         <Route path='/' >
//           <Home/>
//         </Route>
//         <Route path='/empresa' >
//           <Empresa/>
//         </Route>
//         <Route path='/contato' >
//           <Contato/>
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <Router>
       <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/empresa" element={<Empresa />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;