import React, { Component } from 'react';

import './Event.css';


class eventcards extends Component {
    
    render() {
        const {event} = this.props
        return (
            <div className="event_card">
                <label><strong>Event Name: </strong>{event.event_name}</label>

                {/* <label>Speaker: {event.speaker}</label> */}

                <label> <strong> Topic: </strong>{event.topic}</label>

                {/* <label>Description: {event.description}</label> */}

                <label><strong> Room Capacity: </strong> {event.room_capacity}</label>


                {/* <label>Date:{event.date}</label> */}


            </div>
        );
    }
}

export default eventcards;