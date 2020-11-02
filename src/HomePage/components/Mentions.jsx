import React from 'react'
import { NavLink } from 'react-router-dom'
import ProfileImageOpensAccountInfo from '../../App/components/ProfileImageOpensAccountInfo'
import Tweets from './Tweets'

const Mentions = ({ setAccountInfoDisplayed }) => {
        return (
                <div className="notifications_wrapper">
                        <header className='header'> 
                                <div className="image_and_label">
                                        <ProfileImageOpensAccountInfo setAccountInfoDisplayed={setAccountInfoDisplayed} />
                                        <div className="label">
                                                <h2>Notifications</h2>
                                        </div>
                                </div>
                                <div className="header_icon">
                                        <i className="fas fa-cog"></i> 
                                </div>
                        </header>
                        <div className="notification_nav">
                                <div className="all">
                                        <NavLink to="/notifications" activeClassName="notif_nav">
                                                All
                                        </NavLink>
                                </div>
                                <div className="mentions"  style={{ borderBottom: "2px solid #1DA1F2" }}>
                                        <NavLink to="/notifications/mentions" activeClassName="notif_nav"  style={{ color: "#1DA1F2" }}>
                                                Mentions
                                        </NavLink>
                                </div>
                        </div>
                        <Tweets />
                </div>
        )
}

export default Mentions
