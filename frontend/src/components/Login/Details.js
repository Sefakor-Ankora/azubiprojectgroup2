import React from 'react'
import Container from '@material-ui/core/Container';
import 'tachyons';
import './Details.css';
import Footer from './Footer.js';
import { Link } from 'react-router-dom'



export default function Details() {
    return (
        
            <Container maxWidth='xl'>
            <nav class="flex justify-between flex-grow bb b--black-10">
            <a class="f15 dib black no-underline pv2 ph4 br-pill flex items-center " href="/">Evently
            </a>
            <div class="flex-grow pa3 flex items-center">
                <a class="f6 link dib black dim hover-white mr3 mr4-ns" href="#0">Link 1</a>
                <a class="f6 link dib black dim hover-white mr3 mr4-ns" href="#0">Browse Events</a>
                <Link class="f6 dib black bg-animate hover-bg-black hover-white no-underline pv2 ph4 br-pill ba b--white-20" to="/sign">Sign In</Link>
            </div>
            </nav>
            <nav class="subtitle">
            <div class="nowrap overflow-x-auto">
             <a class="link dim black f5 f4-ns dib mr3" href="/" title="Link 1">All</a>
            <a class="link dim black f5 f4-ns dib mr3" href="/" title="Link 2">Today</a>
            <a class="link dim black f5 f4-ns dib mr3" href="/" title="Link 3">Virtual</a>
             <a class="link dim black f5 f4-ns dib mr3" href="/" title="Link 4">Free</a>
             <a class="link dim black f5 f4-ns dib mr3" href="/" title="Link 4">Paid</a>

             </div>
            </nav>
            <div></div>
            <div>
                
            </div>
            <div>
                <Footer/>
            </div>
            </Container>
        
    )
}
