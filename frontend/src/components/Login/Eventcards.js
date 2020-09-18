import React, { Component } from 'react';
// import Eventlisting from '/Eventlisting';

import './Event.css';


class eventcards extends Component {
    
    render() {
        const {event} = this.props
        return (
            <div className="event_card">
                <label>Event Name: {event.event_name}</label>

                <label>Speaker: {event.event_speaker}</label>

                <label>Topic: {event.topic}</label>

                <label>Description: {event.description}</label>

                <label>Room Capacity: {event.room_capacity}</label>


                <label>Date:{event.date}</label>


            </div>
        );
    }
}

export default eventcards;