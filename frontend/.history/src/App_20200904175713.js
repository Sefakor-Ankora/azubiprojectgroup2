import React from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Logo from './components/Login/Logo';
import Signin from './components/Login/Signin';
import Register from './components/Login/Register';




  const particlesOptions = {
    particles: {
      number: {
        value: 30,
        density: true,
        enable: 800
      }
    }
  }

  class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }






  function App() {
        const { isSignedIn, } = this.state;
  return (
    <div className="App">

       <Particles className='particles'
           params={ particlesOptions } 
        />
      <Logo />
      <Signin />
      <Register/>
  <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
          ? <div>

            </div>
          : (
             route === 'signin'
             ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
             : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )
        }   
      

    </div>
  );
      
}


export default App;
