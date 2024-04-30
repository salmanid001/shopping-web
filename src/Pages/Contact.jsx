import React from 'react'
import './CSS/Contact.css'
import contact_banner from '../Components/Assets/contact-banner.jpeg'
import image1 from '../Components/Assets/1.png'
import image2 from '../Components/Assets/2.png'
import image3 from '../Components/Assets/3.png'

const Contact = () => {
  return (
    <div className='contact'>
           <div className='contact-header'>
        <h2>#THEKINGMAKER</h2>
    <p>Read More About Our Product and Updates </p>
    </div>
    <div className='contact-image'>
        <img src={contact_banner} alt="" />
    </div>  
    <div className='contact-detail'>
    <div className="detail">
      <span>GET IN TOUCH</span> 
      <h2>visit our Store location or contact us today</h2>
      <h3>Main store</h3>
      <div>
        <li>
           
            <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
        </li>
        <li>
           
            <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
        </li>
        <li>
           
            <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
        </li>
        <li>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
        </li>
      </div>
    </div>
    <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d942.0195251619039!2d72.86649957232117!3d19.191790845947224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1707638864175!5m2!1sen!2sin" width="600" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
    <div className='form-detail'>
    <form action="">
    <span>LEAVE A MASSEAGE</span>
    <h2>We love to hear from you</h2>
    <input type="text" placeholder='Your Name' />
  <input type="text"  placeholder="E-mail"/>
    <input type="text" placeholder='Your Massege' />
    <textarea name="" id="" cols="30" rows="10" placeholder="Your Masseage"></textarea>
    <button class="normal">Submit</button>
    </form>
  
  <div class="people">
    <div>
    <img src={image1} alt="" />
    <p><span>shakil shaikh</span> Founder of the king maker </p>
  </div>
  <div>
    <img src={image2} alt="" />
    <p><span>Zubeda shaikh</span>  Founder of the king maker </p>
  </div>
  <div>
    <img src={image3} alt="" />
    <p><span>shakil shaikh</span> Founder of the king maker </p>
  </div>
  </div>
  </div>

   </div>
 

  )
}

export default Contact