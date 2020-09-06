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
  { id: "review" },
  { id: "submit" },
]





const Stepforms = () => {
const [formData, setForm] = useForm(defaultData);
const 


  return (
    <div>
      <Register />
     <Signin />
    </div>
  )
}

export default Stepforms;



