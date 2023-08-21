import React from 'react'
import "../styles/Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import Demo from "../assets/clipart.png"
import Aboutimg from "../assets/newdemo.jpg"
const Home = () => {
  return (
    <div className='home'>
        <div className='greeting'>
        <h1 className='greet'>Howdy!</h1>
        <img src={Demo} alt="picture of a girl " id='demopic'/>
        </div>
        <div className='about'>
            <h3 className='page'>About</h3>
            <img src={Aboutimg} alt="" className='aboutimg'/>
            <h3>I am Tolulope Orioye</h3>
        <p>A passionate Front-End React Developer. </p> 
         {/* <p>I am based in Lagos, Nigeria. </p> */}
        </div>
        <div>
            <FontAwesomeIcon icon={faTv}/>
        </div>
    </div>
  )
}

export default Home