import React from 'react';
import Tilt from 'react-tilt'; //imported this component to put the logo in a frame
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className ='ma4 mt0' style={{justifyContent: "flex-start"}}>
        <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 100, width: 100 }} >   ?
        <div className="Tilt-inner pa3"> 
            <img src={brain} style={{paddingTop: '1px'}} alt='logo' />
        </div>
        </Tilt>
    </div>
  );
}

export default Logo;
