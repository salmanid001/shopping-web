import React from 'react'
import './Banner.css'
import banner_image from '../Assets/c2.jpg'

const Banner2 = () => {
  return (
    <div className='banner2'>
        <div className='banner2-offer'>
        <h4>New sales Everyday</h4>
        <h1>Up to <span>70% off</span>  All T-shirt & Accessries</h1>
        <button>Explore More</button>
        </div>
        <div className='banner2-image'>
<img src={banner_image} alt="" />
        </div>
    </div>
  )
}

export default Banner2