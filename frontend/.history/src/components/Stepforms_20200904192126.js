import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';








export default function Stepforms() {
const [formData, setForm] = useForm(defaultData);
const { step, navigation } = useStep({
  steps,
  intialSteps:0,
})

switch(step.id) {
  case "names" :
    return <Signin/>
    case "contact" :
      return <Register/>

}



  return (
    <div>
      
    </div>
  );
}
