import React from 'react';
import { useForm } from "react-hook-form";
import {API_BASE_URL} from '../const';
import axios from "axios";
import { Link } from 'react-router-dom';




const Signup = () => {

  
  const {handleSubmit, register, errors} = useForm();
  const onSubmit = values => {
    const {username,email, password} = values;
  
    axios.post(API_BASE_URL + '/signup/',
        {username, email, password}
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  
  };

  return (
       <form onSubmit={handleSubmit(onSubmit)}>
       <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Registration</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="username"
                  name="username"
                  placeholder="John Doe"

                  ref={register({
                    validate: value => value !== "admin" || "Nice try!"
                  })}
                  id="username"
                />
                 {errors.username && errors.username.message}
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email"
                  ref={register({required: true, pattern: /^\S+@\S+$/i})}
                  id="email"
                  placeholder="example@gmail.com"
                  
                />
              </div>
                <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  ref={register({ 
                    required: true,
                     minLength: 8, 
                     pattern:{
                       value: /\d+/,
                       message: "Invalid password"
                     } 
                      })}
                      placeholder="Password here"
                />
              </div>
              {errors.password && errors.password.message}    
            </fieldset>
            
            <div className="">
            {/* <Link to="/"> */}
               <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Signup"
              />
              {/* </Link> */}
              <div/>
            </div>
          </div>
        </main>
      </article>
    </form>
  );
}
export default Signup;
