import React from 'react'
import './Banner1.css'
import banner1 from '../Assets/b10.jpg'
import banner2 from '../Assets/c3.jpg'
import banner3 from '../Assets/c7.jpg'

const Banner1 = () => {
  return (
    
    <div className='banner1'>
        <div className='banner-box1'>
            <img src={banner1} alt="" />
        </div>
        <div className='heading1'>
            <h2>New T-shirt Collection</h2>
      <h3>New trendy Prints</h3>
      </div>
      <div className='banner-box2'>
            <img src={banner2} alt="" />
        </div>
        <div className='heading2'>
        <h2>Hoddies</h2>
      <h3>at Affordable Prize</h3>
      </div>
      <div className='banner-box3'>
            <img src={banner3} alt="" />
        </div>
        <div className='heading3'>
        <h2>Sales Everyday</h2>
      <h3>That Save Your Money</h3>
      </div>
    </div>
  )
}

export default Banner1