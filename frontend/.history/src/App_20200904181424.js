import React from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Logo from './components/Login/Logo';
import Signin from './components/Login/Signin';
import Register from './components/Login/Register';
import from { useForm, useStep } from 'react-hook-helpers'; 




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
  email: ''

}



  function App() {
    const { formData, setForm } = useForm(defaultData)


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
      
}

export default App;
