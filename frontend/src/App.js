
import React from 'react'
// import './App.css';
// import Particles from 'react-particles-js'; //imported this component for the background
// import  Stepforms  from './components/Stepforms';
// import Logo from './components/Login/Logo';
import Landing from './components/Login/Landing';



const App = () => {

// const particlesOptions = {          //created a function for the background
//   particles: {
//     number: {
//       value: 100,
//       density: true,
//       enable: 800
//     }
//   }
// }


  return (
    <div className='App'>
        {/* <Particles className='particles'
           params={ particlesOptions } 
        /> */}
        <Landing/>
        {/* <Logo/>
       <Stepforms /> */}
       
    </div>
  )
}

export default App
