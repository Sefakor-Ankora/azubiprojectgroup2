import React, { Component } from 'react';
import "tachyons";
import "./Details.css";
import Footer from "../../components/Footer/Footer.js";
import Navbar from '../../components/Navbar/Navbar';
import Eventmodal from '../../components/Cards/Eventmodal.js';
import Backdrop from '../../components/Cards/Backdrop';
// import Eventcards from "./Eventcards"
import {API_BASE_URL} from '../const';
import axios from 'axios';









export default class Details extends Component {
  state = {
    creating: false,
    events: "",
    user: "",
    time:""
  };



handleChange = (e) => {
  const target  = e.target;
  console.log('target', target);
  const value = target.value;
  const name = target.name;
  this.setState({[name]: value})
}



  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  modalSubmitHandler = () => {
    this.setState({creating: false});
    // console.log("you want to book an event")
  const url = API_BASE_URL + "/register/";
    // const formData = {
    //   fullname: this.state.fullname,
    //   phonenumber: this.state.phonenumber,
    //   email: this.state.email,
    //   ticketnumber: this.state.ticketnumber,
    //   time: this.state.time
    // };

    const fdt = {
      events:3,
      user: 45,
     time: this.state.time

    }


    axios.post(url,  fdt).then(response => console.log(response)) 
  };
  modalCancelHandler = () => {
    this.setState({creating: false});
  };

  render() {
    
  return (
     <>
     <div>
       <Navbar/>
     </div>
       <div className="details">

           <div className="details-container">
            <div className="details-card details-one"></div>
              <div className="details-description">
                <h3>Grid Systems.</h3>
                  <div>
                  A grid system is a set of measurements a graphic designer can use to align and size objects within the given format. Although there are a few different categories of grid systems, there are no strict rules on what can or cannot be a grid. It’s up to you. Any guides that help you shape the final design is okay.

                    Relevant for us is how the grid is such a strict mathematical concept. It’s perfect for manipulation in code. The traditional way of creating a grid is by doing it by hand in Photoshop or Illustrator. If you suddenly notice that you want a slimmer grid, you need to re-create the grid and move everything by hand. In code this is not the case, a we can be extremely flexible and try many iterations within minutes. It also allows us to use several grid systems on top of each other, distort the grid system by rotating or scaling it, or generating the grid modules randomly.
                    <h2 className="f6 fw4 mt2 mb0 blue-90"><strong>Mr.Robert  Njuguna</strong></h2>
              <dl className="mt2 f6">
                <dt className="clip">Location</dt>
                <dd className="ml0">Nairobi,Kenya</dd>
                </dl>
                  </div>
                  <React.Fragment>
                  {this.state.creating && <Backdrop/>}
                  {this.state.creating && (
                  <Eventmodal title="Register" 
                  canCancel 
                  canSubmit 
                  onCancel={this.modalCancelHandler} 
                  onSubmit={this.modalSubmitHandler}>
                  <form>
                    
                      <div className="form-control" >
                      {/* <label htmlFor="time">Time</label>
                      <input type="text" name="time" id="time" value={this.state.time} onChange={this.handleChange}></input> */}
                       <select name="time" onChange={this.handleChange}>
                        <option value="Morning">Morning</option>
                        <option value="midmorning">Mid Morning</option>
                        <option value="afternoon">Afternoon</option>
                      </select> 
                    </div>
                  </form>
                  </Eventmodal>)}
                     
                  <div className="events_control">
                  <p>Add Your Sessions Here!!</p>
                    <button onClick={this.startCreateEventHandler}>
                    Register
                    </button>
                  </div>
                  </React.Fragment>
                
              </div>
           </div>
       </div>
       <div>
         <Footer/>
       </div>
       </>
       );
     }
    }





