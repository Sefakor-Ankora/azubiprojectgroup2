import React from 'react';











import React from 'react'




const App = () => {

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: true,
      enable: 800
    }
  }
}


  return (
    <div className='App'>
        <Particles className='particles'
           params={ particlesOptions } 
        />
       <Stepforms />
        <Logo />
    </div>
  )
}

export default App
