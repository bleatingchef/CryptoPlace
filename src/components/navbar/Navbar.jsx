import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import icon from '../../assets/arrow_icon.png'
import { Coin_context } from '../../context/Coin_context'
const Navbar = () => {
  const {setCurrency}=useContext(Coin_context)
  return (

    <div className='navbar'> 
    <img src={logo} alt="" className='logo' />
    <ul>
        <li>Home</li>
        <li>Feature</li>
        <li>Pricing</li>
        <li>Blog</li>
    </ul>
    <div className="navright">
        <select>
            <option value="usd">USD</option>
            <option value="inr">INR</option>
            <option value="eur">EUR</option>
        </select>
        <button>
            Sign Up <img src={icon} alt="" />
        </button>
    </div>
    </div>
  )
}

export default Navbar