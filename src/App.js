
import React from 'react';
import './App.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom'

import Home from './Home';
import Service from './Service';
import Contact from './Contact';

import Navbar from './Navbar';
import { useSelector } from 'react-redux';




const App = ()=> {

  const isLight = useSelector(state => state.changer);
 
  
 
  return (
    <div className='Main'>
    <p className="theme">I have changed Theme to {isLight==="true"?"Light":"Dark"}</p>
    <div className={isLight==="true"?"Light":"Dark"}>
      <p className="Geekster">Geekster</p>
      
   
      <BrowserRouter>
       <Navbar/>
      
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
       </Routes>
      </BrowserRouter>
      
    
      
      </div>
      
    </div>
  )
}

export default App;
