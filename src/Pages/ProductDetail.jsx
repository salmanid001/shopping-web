import React from 'react'
import './CSS/ProductDetail.css'
import image1 from '../Components/Assets/f1.jpg'
import image2 from '../Components/Assets/f2.jpg'
import image3 from '../Components/Assets/f3.jpg'
import image4 from '../Components/Assets/f4.jpg'
import Popular from '../Components/Populars/Popular'








const ProductDetail = () => {
   
  return (
    
    <div className='product-details'>
        
    <div className='product-detail'>
        <div className="single-pro-image">
    <img src={image1} width="500px" className="maining" alt=''/>
<div className="small-img-group">
    <div className="small-img-col">
    <img src={image2} width="120px" className="small-img" alt=''/>
    </div>
    <div className="small-img-col">
    <img src={image3} width="120px" className="small-img" alt=''/>
    </div>
    <div className="small-img-col">
    <img src={image4} width="120px" className="small-img" alt=''/>
    </div>
    <div className="small-img-col">
    <img src={image1} width="120px" className="small-img" alt=''/>
    </div>
</div>
</div>
<div className="single-pro-details">
    <h6>Home / T-shirt</h6>
    <h4>fashion shirts</h4>
    <h2>600.Rs</h2>
    <select>
        <option>Select Size</option>
        <option>small</option>
        <option>Medium</option>
        <option>Large</option>
        <option>XL</option>
        <option>XXL</option>

    </select>
 <input type="number"  value={1}/>
    <button className="button1" class="normal">Add to Cart</button>
    <h4>Product Detail</h4>
    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit culpa 
        est illum quam quibusdam? Omnis in fugit saepe optio fugiat dolorum enim? 
        Beatae et repudiandae nemo harum? Similique facere 
        veniam perspiciatis voluptate. Ducimus nam quas illum delectus. Eligendi, tenetur quidem.</span>
</div>


    </div>
<Popular/>
    </div>
  )
}

export default ProductDetail