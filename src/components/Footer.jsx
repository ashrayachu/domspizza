import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="Footer">
        <div  className="Footer-banner">
            <InstagramIcon className="Socials" style={{fontSize:80}}/>
            <TwitterIcon className="Socials" style={{fontSize:80}}/>
            <FacebookIcon className="Socials" style={{fontSize:80}}/>
            
         </div>
    </div>
  )
}

export default Footer