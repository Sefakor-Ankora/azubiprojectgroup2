import React from 'react';
import Button from '@material-ui/core/Button';


export const Address = ({ formData, setForm, navigation }) => {
  const {address,city,phoneNumber} = formData;
  return (
       <div>
       <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Registration</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="address">Address</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="address"
                  name="address"
                  id="address"
                  value= {address}
                  required={true}
                  onChange={setForm}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="city">city</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="city"
                  name="city"
                  id="city"
                  value= {city}
                  required={true}
                  onChange={setForm}
                />
              </div>
                <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="phoneNumber">Phone Number</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="phoneNumber"
                  name="phoneNumber"
                  id="phoneNumber"
                  value= {phoneNumber}
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
                color="primary"
              />
               <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Back"
              />
              <div/>
            </div>
          </div>
        </main>
      </article>
    </div>
  );
}
export default Address;
