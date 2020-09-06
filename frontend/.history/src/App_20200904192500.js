import React from 'react';
import './App.css';
import Logo from './components/Login/Logo';
import Particles from 'react-particles-js';
   < Signin / >
     <
     Register / >








export default function App() {


  const particlesOptions = {
    particles: {
      number: {
        value: 30,
        density: true,
        enable: 800
      }
    }
  }

  return (
    <div>
      
       <Particles className='particles'
           params={ particlesOptions } 
        />
        <Stepforms/>
      <Logo />
   
    </div>
  );
}
