import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import News from './pages/News';
import Detail from './pages/NewsDetail';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Footer from './components/Footer';

import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <>
      < Header />

      <Routes>
        <Route exact="exact" path='/' element={<Home />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/project' element={<Project />} />
        <Route path='/news' element={<News />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      < Footer />
    </>
  );
}

export default App;
