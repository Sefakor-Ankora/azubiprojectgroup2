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
    <div class="header">
    <nav class="flex justify-between flex-grow bb b--black-10">
  <a class="f15 dib black no-underline pv2 ph4 br-pill flex items-center " href="/">Evently
  </a>
  <div class="flex-grow pa3 flex items-center">
    <a class="f6 link dib black dim hover-white mr3 mr4-ns" href="#0">Link 1</a>
    <a class="f6 link dib black dim hover-white mr3 mr4-ns" href="#0">Browse Events</a>
    <a class="f6 dib black bg-animate hover-bg-black hover-white no-underline pv2 ph4 br-pill ba b--white-20" href="#0">Sign In</a>
  </div>
</nav>
    
    <div className='begin'>
      <div class="tc-l mt4 mt5-m mt6-l ph3">
        <h1 class="f2 f1-l fw2 white-90 mb0 lh-title">BUSINESS<br/>CONFERENCE 2020</h1>
        <h6 class="f4 no-underline dib v-mid bg-blue white b--blue ph3 pv2 mb3">September 30,2020- 8am-6pm</h6><br/>
        <a class="f6 no-underline grow dib v-mid bg-white black ba b--white ph3 pv2 mb3" href="/">Get ticket</a>
      </div>
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

<div className="service-container">
 
 <div className="services-card service-two"></div>
 <div className="service-description">
     <h3>Event 2</h3>
     <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt massa sem.</div>
 </div>
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
