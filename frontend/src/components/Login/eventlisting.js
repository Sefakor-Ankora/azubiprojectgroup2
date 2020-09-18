
import React, { Component } from 'react';
import {API_BASE_URL} from '../const';
import axios from 'axios';
import Navbar from "./Navbar.js";
import Eventcard from "./Eventcards";
import Footer from './Footer';
import Cards from './Cards';


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
                <Navbar />
                {
                    this.state.events.map(event => (<Eventcard event={event} />) )
                } ; 
                <Cards/>
                <Footer/>
            </>
        )
    }
}
