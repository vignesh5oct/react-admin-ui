import React from 'react'
import "./menu.scss"
import { Link } from 'react-router-dom'
import { menuItems } from "../../utils/ConfigMenuItems"

const Menu = () => {
  return (
    <div className='menu'>
      {menuItems.map((items) => (
        <div className='item' key={items.id}>
          <span className='title'>{items.title}</span>

          {items.listItems.map((listItems) => (
            <Link to={listItems.url} className='listItem' key={listItems.id}>
              <img src={listItems.icon} alt="" />
              <span className='listItemTitle'>{listItems.title}</span>
            </Link>
          ))}

        </div>
      ))}
    </div>
  )
}

export default Menu
