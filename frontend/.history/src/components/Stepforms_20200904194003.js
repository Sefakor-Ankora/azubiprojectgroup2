







































import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';
import Signin from './components/Login/Signin';
import Register from './components/Login/Register';


// const defaultData = {
//   email: '',
//   password: '',
// };
// const steps = [
//   { id: "names" },
//   { id: "contact" },
//   { id: "review" },
//   { id: "submit" },
]





export default function Stepforms() {

// const [formData, setForm] = useForm(defaultData);
// const { step, navigation } = useStep({
//   steps,
//   intialSteps:0,
// })

// switch(step.id) {
//   case "names" :
//     return <Signin/>;
//     case "contact" :
//       return <Register/>;

// }



  return (
    <div>
         <Signin />
      <Register/>
    </div>
  );
}

