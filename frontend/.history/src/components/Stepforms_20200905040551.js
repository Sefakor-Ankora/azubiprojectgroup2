import React from 'react'
import {useForm} from 'react-hooks-helper';
import Signin from '../components/Login/Signin';
import Register from '../components/Login/Register';
import {useStep} from 'react-hooks-helper';

 
  

const defaultData = {
  email: '',
  password: '',
};
const steps = [
  { id: "signin" },
  { id: "register" },
  { id: "address" },
  { id: "review" },
  { id: "submit" },
]





const Stepforms = () => {
const [formData, setForm] = useForm(defaultData);
const { step, navigation } = useStep({
  steps,
  initialStep: 0,
})
switch(step.id) {
  case 'signin':
    return <Signin/>
    case ''
}

  return (
    <div>
      <Signin />
      <Register />
    </div>
  )
}

export default Stepforms;



