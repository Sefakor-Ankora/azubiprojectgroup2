import React from 'react';
import { useForm } from "react-hook-form";



export const Register = ({ formData, setForm, navigation }) => {
  //called the function to use to created the forms
  const {firstname,lastname,city,phonenumber,address} = formData;

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => console.log(errors, e);


  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      {/* created the signup inputs with inline styling */}
       <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Registration</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="firstname">Firstname</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="firstname"
                  name="firstname"
                  ref={register({required: true, maxLength: 80})}
                  id="firstname"
                  value= {firstname}
                  required={true}
                  onChange={setForm}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="lastname">Lastname</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="lastname"
                  name="lastname"
                  ref={register({required: true, maxLength: 100})}
                  id="lastname"
                  value= {lastname}
                  required={true}
                  onChange={setForm}
                />
              </div>
                <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="address">Address</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="address"
                  name="address"
                  ref={register}
                  id="address"
                  value= {address}
                  required={true}
                  onChange={setForm}
                />
              </div>
                <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="city">City</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="city"
                  name="city"
                  ref={register}
                  id="city"
                  value= {city}
                  required={true}
                  onChange={setForm}
                />
              </div>
                <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Phonenumber</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="phonenumber"
                  name="phonenumber"
                  ref={register({required: true, minLength: 6, maxLength: 12})}
                  id="phonenumber"
                  value= {phonenumber}
                  required={true}
                  onChange={setForm}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Next"
                onClick={() => navigation.next()}  //click on event, allows you to move to the next page
              />
              <div/>
            </div>
          </div>
        </main>
      </article>
    </form>
  );
}




export default Register;
