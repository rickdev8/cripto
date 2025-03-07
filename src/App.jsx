import './App.css'
import React from 'react';
import Documentation from './components/pages/pagedocumentation/Documentation';
import Homescreen from './components/pages/pagehomescreen/Homescreen';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Autor from './components/pages/pageautor/Autor';
import Navbar from './components/homescreen/navbar/Navbar';
import Login from './components/pages/session/Session';


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Homescreen />}></Route>
        <Route path='/documentation' element={<Documentation />}></Route>
        <Route path='/autor' element={<Autor />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={"PAgina nao encontrada"}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
