import React, { useContext } from 'react'
import './Item.css'
import { Link, NavLink } from 'react-router-dom'






const Item = (item, addToCart) => {

  const {id, name, new_price, old_price, image} = item;



  return (
    <div className='item'>
   
     
       <Link to={`${id}`}> <img src={image} alt="" /></Link>
        <p>{name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                {new_price}
            </div>
            <div className="item-price-old">
                {old_price}
            </div>
           
            <button className='addtocart' onClick={()=> addToCart(item)}>Add to Cart</button>
           
        </div>

    </div>
  )
}

export default Item