import React from 'react'
import "../styles/Footer.css"
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GithubIcon from "@mui/icons-material/GitHub"
const Footer = () => {
  return (
    <div  className='footer'>
       <div className='socials'>
          <InstagramIcon/>
          <LinkedinIcon/>
          <TwitterIcon/>
          <GithubIcon/>
       </div>
       <p> &copy; 2023, Tolu Orioye</p>
    </div>
  )
}

export default Footer