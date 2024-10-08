import './App.css';
import { firestore } from './FirebaseConfig';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Services from './pages/Services';
import News from './pages/News';
import Detail from './pages/NewsDetail';
import Contact from './pages/Contact';
import Footer from './components/Footer';

import 'semantic-ui-css/semantic.min.css';
import { useState } from 'react';
import Background from './components/Background';

function App() {

  const [menuToggle, setMenuToggle] = useState(false);

  const menuToggleHandler = () => {
    menuToggle ? setMenuToggle(false) : setMenuToggle(true);
  }

  return (
    <>
      < Header menuToggle={menuToggle} menuToggler={menuToggleHandler} />
      
      <Background />

      <Routes>
        <Route exact="exact" path='/' element={<Home />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/services' element={<Services db={firestore} />} />
        <Route path='/news' element={<News db={firestore} />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/contact' element={<Contact db={firestore} />} />
      </Routes>

      < Footer />
    </>
  );
}

export default App;
