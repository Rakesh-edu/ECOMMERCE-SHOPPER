import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [Menu,setMenu]=useState("Shop");
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="..." />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link> {Menu==="Shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Mens</Link>{Menu==="Mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link> {Menu==="Women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link> {Menu==="Kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
           <Link to='/cart'> <img src={cart_icon} alt="" /></Link>
            <p className="nav-cart-count">0</p>
        </div>
    </div>
  )
}

export default Navbar
