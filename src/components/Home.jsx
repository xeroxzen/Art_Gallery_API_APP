import React from 'react'
import "../styles/Home.css"
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='landingPage'>
      <h1>Art Gallery</h1>
      <p>Thanks to <span><a href="https://dog.ceo/dog-api/">Dog API</a></span></p>
    
      <NavLink to="/displayPage"><button>Get Started</button></NavLink>
      
    </div>
  )
}

export default Home
