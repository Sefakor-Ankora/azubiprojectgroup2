import React, { Component } from "react";
// import { Toast } from "../Helper/notify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
// import Auxiliary from "../../hoc/Auxiliary";
// import Modal from "../Wigets/Modal";
import Footer from './Login/Footer'
import Event from './Event'
// import EventRegistration from './Event'

import  * as consts  from './constants';

// import React from 'react' ;
// const Auxiliary = (props) => props.children;
// export default Auxiliary;

class EventLayout extends Component {
  state = {
    events: [],
    event: null
  };

  componentDidMount() {
    axios.get(`${consts.EVENTAPP_URL}events/`).then(res => this.setState({events: res.data}))
  }

  loadEventInfo = (event) => {
    console.log(event);
    this.setState({
      ...this.state,
      event: event
    });
  };

  render() {
    const eventLists = this.state.events.map((event, i) => (
      <Event key={i} eventInfo={event} loadInfo={this.loadEventInfo} info={i} />
    ));
    return (
      <div>
        {/* <Toast />  */}
         {/* <Navbar
          loginNavHandler={this.props.loginNavHandler}
          user={this.props.user}
          is_auth={this.props.isAuthenticated
          }
          onlogout={this.props.islogout}
        /> */}
        <main role="main" className="pt-5 mt-2">
          <section className="jumbotron text-center">
            <div className="container">
              <h1 className="display-2">Events</h1>
              <p className="lead text-muted">
                Looking for something to do in Accra? Whether you're a local,
                new in town or just cruising through we've got loads of great
                tips and events. You can explore by location, what's popular,
                our top picks, free stuff... you got this. Ready?
              </p>
              <p>
                <a href="#" className="btn btn-primary my-2">
                  Main call to action
                </a>
                <a href="#" className="btn btn-secondary my-2">
                  Secondary action
                </a>
              </p>
            </div>
          </section>

          <div className="event py-5">
            <div className="container">
              <div className="row">{eventLists}</div>
            </div>
          </div> 
        </main>

        <Footer /> 
         {/* <Modal event={this.state.event}>
          <EventRegistration isAuth={this.props.isAuthenticated} user={this.props.user} event={this.state.event} />
        </Modal>  */}
      </div>
    );
  }
}

export default EventLayout;
