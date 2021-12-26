import React from 'react'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchContainer from '../assets/header/theme-switch.png'
import './Header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className="logoContainer">
                <img src={punkLogo} className='punkLogo' alt="" />
            </div>
            <div className="searchBar">
                <div className="searchIconContainer">
                    <img src={searchIcon} alt="" />
                </div>
                <input className='searchInput' placeholder='Collection, items, or users....'/>
            </div>
            <div className="headerItems">
                <p>Drop</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>
            <div className="headerActions">
                <div className="themeSwitchContainer">
                    <img src={themeSwitchContainer} alt="" />
                </div>
            </div>
            <div className="loginButton">
                Login
            </div>
        </div>
    )
}
