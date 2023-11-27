

import React from 'react';
import {BrowserRouter as Router,Route,Routes}from 'react-router-dom';
import Login from './components/Login';
import Registeration from './components/Registeration';
//import MasonryImageList from './components/MasonryImageList';
import ResponsiveAppBar from './components/ResponsiveAppBar';



function App()
{
  return(
      <Router>
    <div className="App">
     
       <Routes>

        <Route path="/"element ={<ResponsiveAppBar/>}/>
        
        <Route path="/login"element ={<Login/>}/>
        <Route path="/Registeration" element ={<Registeration/>}/>
        
    
       </Routes>
       
    </div>
      </Router>
      
       // <Route path"/m"element ={<ResponsiveAppBar/>}/>
  );
}
export default App;