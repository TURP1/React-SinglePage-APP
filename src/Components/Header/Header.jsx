import React from 'react'
import { NavLink } from 'react-router-dom';
import obj from './Header.module.css'

const Header = (props)=>{

    return(
        <header className={obj.header}>
        <img  src="https://i.pinimg.com/originals/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg" alt="1" />
        <div className={obj.header__container}>
          {!props.authorized
          ?<NavLink to='/login'>Login</NavLink>
          : <div>{props.email}</div>}
          
        </div>
      </header>
    );
};
export default Header;