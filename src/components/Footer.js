import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
            <YouTubeIcon />

        </div>
        <p> &copy; 2022 pinoybbq.com</p>
    </div>
  )
}

export default Footer;