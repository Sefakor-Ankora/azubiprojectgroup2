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
    const { formData, setForm } = useForm(defaultData)

    const { step, navigation } = useStep({
      steps,
      intialSteps: 0,
    })

switch(step.id) {
  case "names":
    return <Signin/>;


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
      
}

export default App;
