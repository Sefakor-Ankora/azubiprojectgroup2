import React from 'react';
import './Dashboard.css';
import Navbar from "./Navbar.js";
import Footer from './Footer';
import { Link } from 'react-router-dom';



export default function Dashboard() {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="dashboard">

                <div className="myAccount">
                    <h2>My Account</h2>
                    <p>Browse Events</p>
                    <p>Registered Events</p>
                    <Link to="/">Log Out</Link>
                </div>

                <div className="personalDetails">
                    <div>
                        <h2>Account Details</h2>
                        <p>FirstName LastName</p>
                        <p>name@example.com</p>
                        <p><a href="https://azubigroup2.azurewebsites.net/">Change Password</a></p>
                    </div>

                    {/* <div>
                        <h2>Address Book</h2>
                        <p>Address Line 1
                        Address Line 2
                        Address Line 3
                        </p>
                    </div>

                    <div>
                        <h2>NewsLetter Preferences</h2>
                        <p>You are currently not subscribed to our newsletter</p>
                        <p><a href="https://azubigroup2.azurewebsites.net/">Edit Preferences</a></p>
                    </div> */}
                </div>

            </div>
            <div>
                <Footer/>
            </div>
        </div>


    )
}

