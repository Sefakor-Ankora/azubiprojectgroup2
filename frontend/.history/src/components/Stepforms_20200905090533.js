import React from 'react'
import {useForm} from 'react-hooks-helper';
import Signin from '../components/Login/Signin';
import Register from '../components/Login/Register';
import Address from '../components/Login/Address';
import Review from '../components/Login/Review';
import Submit from '../components/Login/Submit';


import {useStep} from 'react-hooks-helper';

 
  

const defaultData = {
  email: '',
  password: '',
  c
  firstName: '',
  lastName: '',
  address: '',
 city: '',
 phoneNumber: '',
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
  initialStep: 2,
})

const props = { formData, setForm, navigation }

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

  return (
    <div>
      <Signin />
      <Register />
      <Address/>
      <Review/>
      <Submit/>
    </div>
  )
}

export default Stepforms;



