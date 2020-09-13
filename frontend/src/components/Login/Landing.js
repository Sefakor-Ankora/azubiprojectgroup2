import React from 'react';
import 'tachyons';
import './Landing.css';
import Container from '@material-ui/core/Container';
import './Footer.js';
import Footer from './Footer.js';








const Landing = () => {
  return (
    <Container>

    <header class="sans-serif">
    <div className='begin'>
      <nav class="dt w-100 mw8 center"> 
        <div class="dtc v-mid tr pa3">
          <a class="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/" >Link</a> 
          <a class="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/" >Browse Events</a> 
          <a class="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" href="/" >Sign In</a> 
        </div>
      </nav> 
      <div class="tc-l mt4 mt5-m mt6-l ph3">
        <h1 class="f2 f1-l fw2 white-90 mb0 lh-title">BUSINESS<br/>CONFERENCE 2020</h1>
        <h6 class="f4 no-underline dib v-mid bg-blue white b--blue ph3 pv2 mb3">September 30,2020- 8am-6pm</h6><br/>
        <a class="f6 no-underline grow dib v-mid bg-white black ba b--white ph3 pv2 mb3" href="/">Get ticket</a>
      </div>
      </div>
      <main class='f2 f1-1 fw2 black-90 mb0 1h-title'>
      <h2>Upcoming Events</h2>
        <section>
<div className="service-container">
    <div className="services-card service-one"></div>
    <div className="service-description">

       <h3>Event 1</h3>
       <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt massa sem.</div>

    </div>
</div>

<div>
<aside>
<p>The Epcot center is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</aside>
</div>



<div className="service-container">
 
 <div className="services-card service-two"></div>
 <div className="service-description">
     <h3>Event 2</h3>
     <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt massa sem.</div>
 </div>
</div>


<div>
<aside>
<p>The Epcot center is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</aside>
</div>



<div className="service-container">
   <div className="services-card service-three"></div>
   <div className="service-description">
       <h3>Event </h3>
       <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse tincidunt massa sem.</div>
   </div>
   
 
</div>
<div class="tc-l mt4 mt5-m mt6-l ph3">
<a class="f6 no-underline grow dib v-mid bg-blue white ba b--grey ph3 pv2 mb3" href="/">More Events</a>
</div>
        </section>
        </main>
    </header>

    <div>
      <Footer/>
    </div>
    </Container>
  )
}

export default Landing;
