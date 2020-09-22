import React, { Component } from 'react';
import "tachyons";
import "./Details.css";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import Eventmodal from './Eventmodal.js';
import Backdrop from "./Backdrop.js";
// import Eventcards from "./Eventcards"









export default class Details extends Component {
  state = {
    creating: false
  };

  

  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  modalSubmitHandler = () => {
    this.setState({creating: false});
  };
  modalCancelHandler = () => {
    this.setState({creating: false});
  };

  render() {
    // const {event} = this.props
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
                      <label htmlFor="title">Name</label>
                      <input type="text" id="title"></input>
                    </div>
                    <div className="form-control" >
                      <label htmlFor="title">Phone Nuumber</label>
                      <input type="telephone" id="number"></input>
                      <div className="form-control" >
                      <label htmlFor="title">Date</label>
                      <input type="datetime-local" id="date"></input>
                    </div>
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





