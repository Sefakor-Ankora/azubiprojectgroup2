import React, { Component } from 'react';
import {API_BASE_URL} from '../const';
import axios from 'axios';
import './Cards.css';
import Eventcard from "./Eventcards";
import Navbar from "./Navbar.js";
import Footer from './Footer';



export default class Evenlisting extends Component {
    state = {
        events:[]
    }

    componentDidMount = () => {
        //get the data list from the backend and set the state
        axios.get(API_BASE_URL + '/events')
        .then(response => 
            // console.log()

            {
                const eventsData = response.data; 

                //now set it in your state
                this. setState({ ...this.state.events, events: eventsData});
            }


            );
    }
    render() {
    return (
        <>
        <div>
            <Navbar/>
        </div>
        <div className="team-row">
            <h1 className="title">Events Available</h1>
             <div  className="member">
                <img src="https://images.unsplash.com/photo-1581091870619-835cee86e759?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="team1" />
                
                    {
                    this.state.events.map(event => (<Eventcard event={event} />) )
                } ;
             </div>

            <div className="member">
            <img src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?cs=srgb&dl=pexels-christina-morillo-1181354.jpg&fm=jpg" alt="team2" />
            {
                    this.state.events.map(event => (<Eventcard event={event} />) )
                } ;
            </div>

            <div className="member">
		  <img src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80" alt="team3" />
          {
                    this.state.events.map(event => (<Eventcard event={event} />) )
                } ;
		</div>
        
        <div className="member">
		  <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="team3" />
          {
                    this.state.events.map(event => (<Eventcard event={event} />) )
                } ;
		</div>
	  
        <div className="member">
		  <img src="https://images.pexels.com/photos/2277784/pexels-photo-2277784.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="team3" />
          {
                    this.state.events.map(event => (<Eventcard event={event} />) )
                } ;
		</div>
	  
        <div className="member">
		  <img src="https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="team3" />
		  {
                    this.state.events.map(event => (<Eventcard event={event} />) )
                } ;
		</div>
	  
        <div className="member">
		  <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="team3" />
          {
                    this.state.events.map(event => (<Eventcard event={event} />) )
                } ;
		</div>
	    <div className="member">
		  <img src="https://images.pexels.com/photos/3280211/pexels-photo-3280211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="team3" />
          {
                    this.state.events.map(event => (<Eventcard event={event} />) )
                } ;
		</div>
	  
        </div>
        <div>
           <Footer/> 
        </div>
        </>
    )
 }
}