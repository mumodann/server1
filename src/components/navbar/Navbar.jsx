import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./navbar.scss"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                
                <Link to="/" className='link'>
                <span>Homepage</span>
                </Link>
                <Link to="/series" className='link'>
                    <span>Cast</span>
                </Link>
            </div>

            <div className="right">
                <img src="https://lh3.googleusercontent.com/a/AEdFTp6Eto4YZ5J_EAylTr6L8xD6AQb7V4jTkIUosV3GGA=s288-p-no" />
                <div className="profile">
                    <ArrowDropDown className="icon"/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar