import React from 'react'
import "./navbar.scss"
import logo from "../../assests/logo.svg"
import search from "../../assests/search.svg"
import app from "../../assests/app.svg"
import expand from "../../assests/expand.svg"
import notification from "../../assests/notifications.svg"
import settings from "../../assests/setting.svg"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img alt='logo' src={logo}></img>
        <span>AppName</span>
      </div>
      <div className='icons'>
        <img className='icon' alt='search' src={search} />
        <img className='icon' alt='app' src={app} />
        <img className='icon' alt='ex' src={expand} />
        <div className='notification'>
          <img className='icon' alt='notify' src={notification} />
          <span>1</span>
        </div>
        <div className='user'>
          <img className='icon' alt='setting' src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg" />
          <span>Name</span>
        </div>
        <Link to={"/login"}>
          <img className='icon' alt='ex' src={settings} />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
