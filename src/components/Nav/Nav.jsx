import React from 'react'
import './Nav.scss'
import benchLogo from "../../assets/images/benchLogo.png"
import SearchFilter from '../SearchFilter/SearchFilter'
import Button from '../Button/Button'
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div className='nav'>
      <div className='nav__logo'>
        <div className='nav__img-container'>
          <img className='nav__img' src={benchLogo} alt="" />
        </div>
          <h1 className='nav__title'>Bench Locator</h1>
      </div>
        <div className='nav__search'>
          <SearchFilter/>
        </div>
        <Link to="/bench/add-bench">
          <div className='nav__button'>
            <Button buttonText="Add a Bench"/>
          </div>
        </Link>
    </div>
  )
}

export default Nav