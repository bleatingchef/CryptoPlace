import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import icon from '../../assets/arrow_icon.png'
import { Coin_context } from '../../context/Coin_context'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const {setCurrency}=useContext(Coin_context)

  const CurrencyHandler =(e)=>{
    switch(e.target.value){
      case "usd":{
        setCurrency({name:"usd", symbol:"$"});
        break;
      }
      case "inr":{
        setCurrency({name:"inr", symbol:"₹"});
        break;
      }
      case "eur":{
        setCurrency({name:"eur", symbol:"€"});
        break;
      }
      default:{
        setCurrency({name:"usd", symbol:"$"});
        break;
      }
    }

  }
  return (

    <div className='navbar'> 
    <Link to={'/'}>
    <img src={logo} alt="" className='logo' />
    </Link>
    
    <ul>

        <Link to={'/'}>Home</Link>
        <li>Feature</li>
        <li>Pricing</li>
        <li>Blog</li>
    </ul>
    <div className="navright">
        <select onChange={CurrencyHandler}>
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