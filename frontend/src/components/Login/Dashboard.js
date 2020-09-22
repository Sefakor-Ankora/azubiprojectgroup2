import React from 'react';
import './Dashboard.css';
import Navbar from "./Navbar.js";
import Footer from './Footer';
import { Link } from 'react-router-dom';



export default function Dashboard() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="dashboardarea">
                <div className="dashboard">

                    <div className="myAccount">
                        <h3>My Account</h3>
                        <p>Browse Events</p>
                        <p>Registered Events</p>
                        <Link to="/">Log Out</Link>
                    </div>

                    <div className="personalDetails">

                        <div className="personalDetails2">
                            <div className="accountDetails">
                                <h3>Account Details</h3>
                                <p>FirstName LastName</p>
                                <p>name@example.com</p>
                                <p><a href="https://azubigroup2.azurewebsites.net/">Change Password</a></p>
                            </div>

                            <div className="addressBook">
                                <h3>Address Book</h3>
                                <p>Address Line 1 </p>
                                <p>Address Line 2 </p>
                                <p>Address Line 3 </p>

                            </div>
                        </div>
                        <div className="newsletter">
                            <h3>NewsLetter Preferences</h3>
                            <p>You are currently not subscribed to our newsletter</p>
                            <p><a href="https://azubigroup2.azurewebsites.net/">Edit Preferences</a></p>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>


    )
}

