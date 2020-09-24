import React, { Component } from 'react';



class Userinfo extends Component {
    
    render() {
        const {signup} = this.props
        return (
            <div className="user_info">
                <label><strong>Event Name: </strong>{signup.event_name}</label>

                {/* <label>Speaker: {event.speaker}</label> */}

                <label> <strong> Topic: </strong>{signup.topic}</label>

                {/* <label>Description: {event.description}</label> */}

                <label><strong> Room Capacity: </strong> {signup.room_capacity}</label>


                {/* <label>Date:{event.date}</label> */}


            </div>
        );
    }
}

export default Userinfo;