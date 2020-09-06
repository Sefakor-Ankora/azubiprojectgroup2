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
  { id: "names" },
  { id: "register" },
  { id: "review" },
  { id: "submit" },
]





const Stepforms = () => {
 const [formData, setForm] = useForm(defaultData);
 const { step, navigation } = useStep({
  steps,
  intialSteps:1,
});

switch(step.id) {
  case "names" :
    return <Register/ >;
    case "register" :
      return <Signin/ >; 
      
}
 




  return (
    <div>
      <Register />
     <Signin />
    </div>
  )
}

export default Stepforms;



