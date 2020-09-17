import React from 'react'
import './Stepforms.css'
import Particles from 'react-particles-js'; //imported this component for the background
import {useForm} from 'react-hooks-helper';             //imported a component to create forms and navigation
import Signin from '../components/Login/Signin';
import Register from '../components/Login/Register';     
import Address from '../components/Login/Address';
import Review from '../components/Login/Review';
import Submit from '../components/Login/Submit';
import {
  useStep
} from 'react-hooks-helper'; //imported a component to create forms and navigation

 
  
//default data for inputs
const defaultData = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmpassword: '',
  address: '',
 city: '',
 phonenumber: '',
};
//created an id for the steps
const steps = [
  { id: "signin" },
  { id: "register" },
  { id: "address" },
  { id: "review" },
  { id: "submit" },
]




//created a function to link the various components
const Stepforms = () => {
const [formData, setForm] = useForm(defaultData);
const { step, navigation } = useStep({
  steps,
  initialStep: 0,
})

const props = { formData, setForm, navigation }
//allows you to navigate around the components
switch(step.id) {
  case 'signin':
    return <Signin { ...props } />;
    case 'register':
      return <Register { ...props } />;
      case 'address':
        return <Address { ...props } />;
        case 'review':
          return <Review { ...props } />;
          case 'submit':
            return <Submit { ...props } />;
}




  const particlesOptions = {          //created a function for the background
    particles: {
      number: {
        value: 100,
        density: true,
        enable: 800
      }
    }
  }




  return (
    //calling the various components 
    <div>
      <Particles className='particles'
           params={ particlesOptions } 
        />
        
      <Signin /> 
      <Register />
      <Address/>
      <Review/>
      <Submit/>
    </div>
  )
}




export default Stepforms;