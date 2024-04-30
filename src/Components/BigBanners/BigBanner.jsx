import React from 'react'
import './BigBanner.css'
import first_image from '../Assets/b17.jpg'
import second_image from '../Assets/b10.jpg'

const BigBanner = () => {
  return (
    <div className='big-banner'>
        <div className='first-banner'>
            <div className='first-offer'>
            <h4>Crazy Deals</h4>
    <h2>Buy 3 get 1 Free</h2>
    <span>The best classic T-shirt is on sale at <span>#ThekingMaker</span></span>
  <button >Learn More</button>
            </div>
            <div className='first-image'>
                <img src={first_image} alt="" />
            </div>
        </div>
        <div className='second-banner'>
            <div className='second-offer'>
            <h4>Crazy Deals</h4>
    <h2>Buy 3 get 1 Free</h2>
    <span>The best classic T-shirt is on sale at <span>#ThekingMaker</span></span>
  <button >Learn More</button>
            </div>
            <div className='second-image'>
                <img src={second_image} alt="" />
            </div>
        </div>

    </div>
  )
}

export default BigBanner