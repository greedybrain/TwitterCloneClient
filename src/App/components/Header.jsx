import React from 'react'
// import naya_willis_image from '../../Images/naya_willis.jpg'
import './Header.css'
import ProfileImageOpensAccountInfo from './ProfileImageOpensAccountInfo'

const Header = () => {
        return (
                <header className='header'> 
                        <div className="image_and_label">
                                <ProfileImageOpensAccountInfo />
                        </div>
                        <div className="header_icon">
                                <i className="far fa-star"></i> 
                        </div>
                </header>
        )
}

export default Header
