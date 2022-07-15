import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';
import Error404 from './components/Error404';
import Header from './elements/Header';

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destination/:id' element={<Destination/>}/>
        <Route path='/crew/:id' element={<Crew/>}/>
        <Route path='/technology/:id' element={<Technology/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </>
  );
}
 
export default App;