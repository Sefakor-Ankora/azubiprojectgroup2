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
    </header>

    

    <main class="mw6 left">
    <h2>Upcoming Events</h2>
  <article>
    <a class="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="/">
      <div class="dtc w3">
        <img src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?cs=srgb&dl=pexels-christina-morillo-1181354.jpg&fm=jpg" class="db w-100" alt="conference 1" />
      </div>
      <div class="dtc v-top pl2">
        <h1 class="f6 f5-ns fw6 lh-title black mv0">Grid Systems</h1>
        <h2 class="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h2>
        <dl class="mt2 f6">
          <dt class="clip">Location</dt>
          <dd class="ml0">Nairobi,Kenya</dd>
        </dl>
      </div>
    </a>
  </article>
  <article>
    <a class="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="/">
      <div class="dtc w3">
        <img src="https://images.unsplash.com/photo-1581091870619-835cee86e759?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"  class="db w-100" alt="conference2" />
      </div>
      <div class="dtc v-top pl2">
        <h1 class="f6 f5-ns fw6 lh-title black mv0">History of the Poster</h1>
        <h2 class="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h2>
        <dl class="mt2 f6">
          <dt class="clip">Location</dt>
          <dd class="ml0">Lagos,Nigeria</dd>
        </dl>
      </div>
    </a>
  </article>
  <article>
    <a class="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="#0">
      <div class="dtc w3">
        <img src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80" alt="conference 3" class="db w-100"/>
      </div>
      <div class="dtc v-top pl2">
        <h1 class="f6 f5-ns fw6 lh-title black mv0">Graphic Design in IBM: Typography, Photography, and Illustration</h1>
        <h2 class="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h2>
        <dl class="mt2 f6">
          <dt class="clip">Location</dt>
          <dd class="ml0">Cairo,Egypt</dd>
        </dl>
      </div>
    </a>
  </article>
  <article>
    <a class="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="#0">
      <div class="dtc w3">
        <img src="https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="conference 4" class="db w-100"/>
      </div>
      <div class="dtc v-top pl2">
        <h1 class="f6 f5-ns fw6 lh-title black mv0">Fotoplakate: Von den Anfängen</h1>
        <h2 class="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h2>
        <dl class="mt2 f6">
          <dt class="clip">Location</dt>
          <dd class="ml0">Accra,Ghana</dd>
        </dl>
      </div>
    </a>
  </article>
  <article>
    <a class="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="#0">
      <div class="dtc w3">
        <img src="https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="conference 4" class="db w-100"/>
      </div>
      <div class="dtc v-top pl2">
        <h1 class="f6 f5-ns fw6 lh-title black mv0">The Graphic Artist</h1>
        <h2 class="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h2>
        <dl class="mt2 f6">
          <dt class="clip">Location</dt>
          <dd class="ml0">Accra,Ghana</dd>
        </dl>
      </div>
    </a>
  </article>
        </main>

    <div class="mw6 center">
      <a class="f6 dib blue bg-animate hover-bg-blue hover-white no-underline pv2 ph4 br-pill ba b--white-20" href="/">MORE EVENTS</a>
    </div>

    <div>
      <Footer/>
    </div>
    </Container>
  )
}

export default Landing;
