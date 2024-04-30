import React from 'react'
import './Footer.css'
import app from '../Assets/app.jpg'
import play from '../Assets/play.jpg'
import pay from '../Assets/pay.png'
import insta from '../Assets/instagram_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'
import pintrest from '../Assets/pintester_icon.png'

const Footer = () => {
  return (
    
    <div className='footer'>
      <hr />
        <h6>THE KING MAKER
  </h6>

        <div className='footers'>
        <div className="col">
    <h4>Contact</h4>
    <p><h4>Number</h4>+919699125132 / +91 9594594232 </p>
    <p><h4>Address</h4>shivaji nagar malad east mumbai</p>
  <div className="follow">
<h3>Follow Us</h3>

<div className="icon">

<img src={insta} alt="" />
<img src={whatsapp} alt="" />
<img src={pintrest} alt="" />
</div>
  </div>
  </div>
  <div class="col">
  <h4>My Account</h4>
  <a href="#">About us</a>
  <a href="#">Delivery Information</a>
  <a href="#">Term & Condition</a>
  <a href="#">Contact Us</a>
</div>
  <div className="col">
  <h4>About</h4>
  <a href="#">About us</a>
  <a href="#">Delivery Information</a>
  <a href="#">Term & Condition</a>
  <a href="#">Contact Us</a>
</div>
<div className='col-install'>
<h4>Install App</h4>
  <p>From App Store or Google Play</p>
  <div className='row'>
    <img src={app} alt="" />
    <img src={play} alt="" />
  </div>
  <img src={pay} alt="" />
</div>
<div class="copyright">
  <p>@ 2024, Kingmaker  by shakil shaikh</p>
</div>
</div>
    </div>
  )
}

export default Footer