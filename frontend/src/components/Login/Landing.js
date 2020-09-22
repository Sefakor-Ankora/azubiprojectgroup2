import React from 'react';
import 'tachyons';
import './Landing.css';
// import Container from '@material-ui/core/Container';
import './Footer.js';
import Footer from './Footer.js';
import { Link } from 'react-router-dom'
import Navbar from "./Navbar.js";


const Landing = () => {
  return (
    <div>

          <header className="sans-serif">
          <div className="header">
          <Navbar/>
          <div className='begin'>
            <div className="tc-l mt4 mt5-m mt6-l ph3">
              <h3 className="f2 f1-l fw2 white-90 mb0 lh-title">BUSINESS<br/>CONFERENCE 2020</h3>
              <h6 className="f4 no-underline dib v-mid bg-blue white b--blue ph3 pv2 mb3">September 30,2020- 8am-6pm</h6><br/>
              <Link className="f6 no-underline grow dib v-mid bg-white black ba b--white ph3 pv2 mb3" to="/">Get ticket</Link>
            </div>
            </div>
            </div>
          </header>

          

          <main className="mw6 left">
          <h2>Upcoming Events</h2>
        <article>
          <Link className="link dt w-100 bb b--black-10 pb2 mt2 dim blue" to="/details">
            <div className="dtc w3">
              <img src="https://images.unsplash.com/photo-1581094648468-20624f9c771a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" className="db w-100" alt="conference 1" />
            </div>
            <div className="dtc v-top pl2">
              <h3 className="f6 f5-ns fw6 lh-title black mv0">Grid Systems</h3>
              <h3 className="f6 fw4 mt2 mb0 black-60">Mr.Robert  Njuguna</h3>
              <dl className="mt2 f6">
                <dt className="clip">Location</dt>
                <dd className="ml0">Nairobi,Kenya</dd>
              </dl>
            </div>
          </Link>
        </article>
        <article>
          <Link className="link dt w-100 bb b--black-10 pb2 mt2 dim blue" to="/details">
            <div className="dtc w3">
              <img src="https://images.unsplash.com/photo-1581091870619-835cee86e759?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"  className="db w-100" alt="conference2" />
            </div>
            <div className="dtc v-top pl2">
              <h3 className="f6 f5-ns fw6 lh-title black mv0">History of the Poster</h3>
              <h3 className="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h3>
              <dl className="mt2 f6">
                <dt className="clip">Location</dt>
                <dd className="ml0">Lagos,Nigeria</dd>
              </dl>
            </div>
          </Link>
        </article>
        <article>
          <Link className="link dt w-100 bb b--black-10 pb2 mt2 dim blue" to="/details">
            <div className="dtc w3">
              <img src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80" alt="conference 3" className="db w-100"/>
            </div>
            <div className="dtc v-top pl2">
              <h3 className="f6 f5-ns fw6 lh-title black mv0">Graphic Design in IBM: Typography, Photography, and Illustration</h3>
              <h3 className="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h3>
              <dl className="mt2 f6">
                <dt className="clip">Location</dt>
                <dd className="ml0">Cairo,Egypt</dd>
              </dl>
            </div>
          </Link>
        </article>
        <article>
          <Link className="link dt w-100 bb b--black-10 pb2 mt2 dim blue" to="/details">
            <div className="dtc w3">
              <img src="https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="conference 4" className="db w-100"/>
            </div>
            <div className="dtc v-top pl2">
              <h3 className="f6 f5-ns fw6 lh-title black mv0">Fotoplakate: Von den Anfängen</h3>
              <h3 className="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h3>
              <dl className="mt2 f6">
                <dt className="clip">Location</dt>
                <dd className="ml0">Accra,Ghana</dd>
              </dl>
            </div>
          </Link>
        </article>
        <article>
          <Link className="link dt w-100 bb b--black-10 pb2 mt2 dim blue" to="/details">
            <div className="dtc w3">
              <img src="https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="conference 4" className="db w-100"/>
            </div>
            <div className="dtc v-top pl2">
              <h3 className="f6 f5-ns fw6 lh-title black mv0">The Graphic Artist</h3>
              <h3 className="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h3>
              <dl className="mt2 f6">
                <dt className="clip">Location</dt>
                <dd className="ml0">Accra,Ghana</dd>
              </dl>
            </div>
          </Link>
        </article>
              </main>

          <div className="mw6 center">
            <Link className="f6 dib blue bg-animate hover-bg-blue hover-white no-underline pv2 ph4 br-pill ba b--white-20" to="/cards">MORE EVENTS</Link>
          </div>

          <div>
            <Footer/>
          </div>
          </div>
  )
}

export default Landing;
