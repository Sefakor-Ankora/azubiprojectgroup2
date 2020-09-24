import React from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import '../Login/Signin.css'
import {API_BASE_URL} from '../const';








const Signin = () => {

  
const {handleSubmit, register, errors} = useForm();
const onSubmit = values => {
  const {email, password} = values;

  axios.post(API_BASE_URL + '/login/',
      { email, password}
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

};

  return (
    <div className="start">
    <ul>
      <li>W</li>
      <li>E</li>
      <li>L</li>
      <li>C</li>
      <li>O</li>
      <li>M</li>
      <li>E</li>
      <li>T</li>
      <li>O</li>
    </ul>
   
    <form onSubmit={handleSubmit(onSubmit)}>
    
     
       <article className="br5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-3 center">
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
                />
              </div>
              {errors.email && errors.email.message}

              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  ref={register({ 
                    required: true,
                     minLength: 8, 
                     pattern:{
                       value: /\d+/,
                       message: "Invalid password"
                     } 
                      })}
                  placeholder="Password here"
                  id="password"
                />
              </div>
              {errors.password && errors.password.message}     
              <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/>Remember me</label>
            </fieldset>
            <div className="">
              {/* <Link to = "/landing"> */}
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
              {/* </Link> */}
              
  
            </div>
            <div className="lh-copy mt3">
            <p>Don't have an Account?</p>
            </div>
            <div className="mt3">
            <Link to = "/signup">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 "
                type="Signup"
                value="Signup"
              />
              </Link>
            </div>
          </div>
        </main>
      </article>
    </form>
    </div>
  );
}






export default Signin;








