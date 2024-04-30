import React from 'react'
import './NewsLetter.css'
import NewsLetter_image from '../Assets/b14.png'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <div className='newsletter-box'>
        <div className="newstext ">
    <h4>Sing up for Latest Offer</h4>
    <p>Get update on our every arrival and <span>Spacial Offer</span></p>
  </div>
  <div className='form'>
    <input type="text" placeholder='Your Email Adress' />
    <button>Sing Up</button>
  </div>
        </div>
        <div className='newsletter-image'>
            <img src={NewsLetter_image} alt="" />
        </div>
    </div>
  )
}

export default NewsLetter