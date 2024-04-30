import React from 'react'
import './Feature.css'
import feature1 from '../Assets/f1.png'
import feature2 from '../Assets/f2.png'
import feature3 from '../Assets/f3.png'
import feature4 from '../Assets/f4.png'
import feature5 from '../Assets/f5.png'
import feature6 from '../Assets/f6.png'


const Feature = () => {
  return (
    <div className='feature'>
        <div className="fe-box">
        <img src={feature1} alt="" />
      <h6>Free Shipping</h6>
    </div>
    <div className="fe-box">
        <img src={feature2} alt="" />
      <h6>Free Shipping</h6>
    </div>
    <div className="fe-box">
        <img src={feature3} alt="" />
      <h6>Free Shipping</h6>
    </div>
    <div className="fe-box">
        <img src={feature4} alt="" />
      <h6>Free Shipping</h6>
    </div>
    <div className="fe-box">
        <img src={feature5} alt="" />
      <h6>Free Shipping</h6>
    </div>
    <div className="fe-box">
        <img src={feature6} alt="" />
      <h6>Free Shipping</h6>
    </div>
    </div>
  )
}

export default Feature