import { BrowserRouter, Routes, Route } from 'react-router';
import Navbar from './Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css'; //lab 7 ex3
import NotFound from './pages/NotFound'; //lab7-ex 4 err404
import About from './pages/About'; //lab7-ex5 pag about
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact"  element={<Contact />} /> 
        <Route path="/about"    element={<About />} />
        <Route path="*"         element={<NotFound />} />
      

      </Routes>
    </BrowserRouter>
  );
}

export default App;
