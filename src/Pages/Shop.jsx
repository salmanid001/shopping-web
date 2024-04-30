import React from 'react'
import './CSS/Shop.css'
import shop_banner from '../Components/Assets/c1.jpg'
import all_product from '../Components/Assets/all_product'
import Item from '../Components/Items/Item'

const Shop = () => {
  return (
    <div className='shop-header'>
        <div className='page-header'>
    <h2>#THEKINGMAKER</h2>
    <p>Save more with coupons & up to 70% 0ff! </p>
    </div>
    <div className='shop-image'>
        <img src={shop_banner} alt="" />
    </div>
    <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className='collection'>
        {all_product.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} /> 
        
        })}
        </div>

    </div>
  )
}

export default Shop