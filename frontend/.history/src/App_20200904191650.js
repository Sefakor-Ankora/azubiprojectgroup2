import React from 'react';
import './App.css';
import { useForm, useStep } from 'react-hooks-helper';
import Logo from './components/Login/Logo';
import Signin from './components/Login/Signin';
import Register from './components/Login/Register';
import  from './components/Login/Register';

import Particles from 'react-particles-js';







const defaultData = {
  email: '',
  password: '',
};
const steps = [
  { id: "names" },
  { id: "contact" },
  { id: "review" },
  { id: "submit" },
]

export default function App() {
// const [formData, setForm] = useForm(defaultData);
// const { step, navigation } = useStep({
//   steps,
//   intialSteps:0,
// })

// switch(step.id) {
//   case "names" :
//     return <Signin/>
//     case "contact" :
//       return <Register/>

// }

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
      <Logo />
      <Signin />
      <Register/>
    </div>
  );
}
