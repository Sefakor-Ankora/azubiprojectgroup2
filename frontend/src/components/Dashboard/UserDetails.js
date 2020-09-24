
import React, { Component } from 'react';
import {API_BASE_URL} from '../const';
import axios from 'axios';

export default class Evenlisting extends Component {
    state = {
        signup:{}
    }

    componentDidMount = () => {
        
        axios.get(API_BASE_URL + '/signup')
        .then(response => 
            

            {
                const eventsData = response.data; 

                
                this. setState({ ...this.state.signup, signup: eventsData});
            }


            );
    }
}