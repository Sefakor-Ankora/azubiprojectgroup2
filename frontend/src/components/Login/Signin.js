import React from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'






export const Signin = ({ formData, setForm, navigation }) => {
 
  const {email, password} = formData;


const handleSubmit = (e) => {
  // e.preventDefault()
  console.log(formData)

   console.log(email, password)

  axios.post('http://52.176.53.158/api/login/',
      { email, password}
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

}


const { register, errors} = useForm();
const onSubmit = values => console.log(values);

  return (
    <>
   
    <form onSubmit={handleSubmit(onSubmit)}>
    
     
       <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  ref={register({
                        required: "Required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "invalid email address"
                        }
                      })}
                  placeholder="example@gmail.com"
                  name="email"
                  id="email"
                  value= {email}
                  onChange={setForm}
                />
              </div>
              {errors.email && errors.email.message}

              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  ref={register({ required: true, minLength: 10, pattern: /\d+/ })}
                  placeholder="Password here"
                  id="password"
                  value= {password}
              
                  onChange={setForm}
                />
              </div>
              {/* {errors?.password?.types?.required && <p>password required</p>}
              {errors?.password?.types?.minLength && <p>password minLength 10</p>} */}
              {errors?.password?.types?.pattern && <p>password number only</p>}
            </fieldset>
            <div className="">
              <Link to = "/dashboard">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
                onClick = {
                  () => handleSubmit()
                }
              />
              </Link>
              {
                /* click on event, allows you to move to the next page */ }
            </div>
            <div className="lh-copy mt3">
            <p>Don't have an Account?</p>
              <p className="f6 link dim black db pointer" onClick={() => navigation.next()}>Signup Here</p>   
              {/* click on event, allows you to move to the next page */}
      
            </div>
          </div>
        </main>
      </article>
    </form>
    </>
  );
}






export default Signin;








