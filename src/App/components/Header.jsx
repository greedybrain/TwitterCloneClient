import React from 'react'
// import naya_willis_image from '../../Images/naya_willis.jpg'
import './Header.css'

const Header = () => {
        return (
                <header className='header'> 
                        <div className="image_and_label">
                                <div className="profile_image">
                                        {/* profile image  */}
                                        {/* <img src={naya_willis_image} alt="profile pic"/> */}
                                </div>
                                <div className="label">
                                        {/* label  */}
                                        <h2>Home</h2>
                                </div>
                        </div>
                        <div className="star">
                                {/* star icon  */}
                                <i className="far fa-star"></i> 
                        </div>
                </header>
        )
}

export default Header
