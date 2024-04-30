import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import cart_icon from '../Assets/cart_icon.png'
import logo from '../Assets/logo.png'




const Header = ({size}) => {
  
 
  return (
    <div className='header'>
     <div className='nav-logo'>
            <img src={logo} alt="" />
            <h4>THE KING MAKER</h4>
        </div>

 
 <ul  className='nav-menu'>
        <li className='active' onClick={()=>("./")}><Link style={{ textDecoration: 'none'}}to='/' >Home </Link></li>
        <li onClick={()=>("shop")}><Link style={{ textDecoration: 'none'}} to='/shop' >Shop</Link></li>
        <li onClick={()=>("blog")}><Link style={{ textDecoration: 'none'}}to='/blog' >Blog </Link></li>
       <li onClick={()=>("about")}><Link style={{ textDecoration: 'none'}}to='/about' >About </Link></li>
       <li onClick={()=>("contact")}><Link style={{ textDecoration: 'none'}}to='/contact' >Contact </Link></li>
    </ul>
   
    <div className='nav-login-cart'>
      <Link to='/login'><button>Login</button></Link>
       <Link to='/cart'><img src={cart_icon} alt="" /></Link> 
        <div className='nav-cart-count'>{size}</div>
    </div>

        
    </div>
    
  )
}

export default Header