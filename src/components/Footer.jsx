import React from 'react'
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram (1).png'
import telegram from '../assets/images/telegram.png'
import email from '../assets/images/email.png'
import whatsapp from '../assets/images/whatsapp.png'
function Footer() {
  return (
    <footer className="footer">
        <div className="footer_container">
            <div className="footer_title">
                <h1 className="footer__title">Связаться со мной</h1>
            </div>
            <div className="footer_images">
                <a href=""><img src={facebook} alt=""/></a>
                <a href=""><img src={instagram} alt=""/></a>
                <a href=""><img src={telegram} alt=""/></a>
                <a href=""><img src={email} alt=""/></a>
                <a href=""><img src={whatsapp} alt=""/></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer