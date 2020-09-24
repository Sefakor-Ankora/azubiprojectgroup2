import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        
             <>
      <nav class="flex justify-between flex-grow bb b--black-10">
        <Link
          class="f15 dib black no-underline pv2 ph4 br-pill flex items-center "
          to="/"
        >
            SimplyEvents
        </Link>
        <div class="flex-grow pa3 flex items-center">
          <Link class="f6 link dib black dim hover-white mr3 mr4-ns" to="/cards">
            Browse Events
          </Link>
          <Link
            class="f6 dib black bg-animate hover-bg-black hover-white no-underline pv2 ph4 br-pill ba b--white-20"
            to="signin"
          >
            Sign In
          </Link>

         <Link className="f6 dib black bg-animate hover-bg-black hover-blue no-underline pv2 ph4 br-pill ba b--white-20" 
         to="/signin">
         Dashboard
         </Link>

        </div>
      </nav>
    

      
        </>
    )
}
