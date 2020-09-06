import React from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Logo from './components/Login/Logo';
import Signin from './components/Login/Signin';
import Register from './components/Login/Register';




  const particlesOptions = {
    particles: {
      number: {
        value: 30,
        density: true,
        enable: 800
      }
    }
  }
  function App() {
  return (
    <div className="App">

       <Particles className='particles'
           params={ particlesOptions } 
        />
      <Logo />
      <Signin />
      
    
    

    </div>
  );
}

export default App;
