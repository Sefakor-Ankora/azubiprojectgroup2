import React from 'react';
import './App.css';
import Logo from './components/Login/Logo';
import Particles from 'react-particles-js';
// import { Stepforms } from './components/Stepforms';








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
     
      <Logo />
     
   
    </div>
  );
}



import React from 'react'

const App = () => {
  return (
    <div className='App'>
       <Stepforms />
    </div>
  )
}

export default App
