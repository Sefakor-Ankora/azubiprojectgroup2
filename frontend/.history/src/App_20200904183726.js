import React from 'react';
import Particles from 'react-particles-js';
import './App.css';
import { useForm, useStep } from 'react-hooks-helper';
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


const defaultData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',

}

const steps = [
  { id: 'names' },
  { id: 'contacts' },
  { id: 'review' },
  { id: 'submit' },
]



  function App() {
}






  return (
    <div className="App">

       <Particles className='particles'
           params={ particlesOptions } 
        />
      <Logo />
      <Signin />
      <Register/>

    </div>
  );
      
  };

export default App;
