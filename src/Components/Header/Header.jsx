import React from 'react'
import { NavLink } from 'react-router-dom';
import obj from './Header.module.css';
import defaultPhoto from '../../assets/images/default_photo.jpg'
import { useEffect } from 'react';
import { useState } from 'react';

const Header = ({ authorized, littleImage, email, logout, authorizedId, currentProfileId }) => {
  let isOwner = (authorizedId === currentProfileId)

  let [littleAvatar, setLittleAvatar] = useState(littleImage);

  useEffect(() => {
    isOwner && setLittleAvatar(littleImage)
  }, [littleImage, isOwner])

  return (
    <header className={obj.header}>
      <img src="https://i.pinimg.com/originals/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg" alt="1" />
      <div className={obj.header__container}>
        {!authorized
          ? <NavLink to='/login'>Login</NavLink>
          : <div>
            <img className={obj.header__avatar} src={littleAvatar ? littleAvatar : defaultPhoto} alt="2" />
            <div className={obj.header__profileName_logoutBtn_Container}>
              <div className={obj.header__item}>{email}</div>
              <button className={obj.header__item} onClick={logout}>Log Out</button>
            </div>
          </div>}
      </div>
    </header>
  );
};
export default Header;