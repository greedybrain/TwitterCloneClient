import React from 'react'
import './AccountInfo.css'
import naya_willis from '../../Images/naya_willis.jpg'

const AccountInfo = ({ accountInfoDisplayed, setAccountInfoDisplayed }) => {
        const handleCloseAccountInfo = event => {
                const target = event.target.parentElement.parentElement.parentElement.parentElement
                setAccountInfoDisplayed(false)
                target.classList.add(
                        'animate__animated',
                        'animate__slideOutLeft',
                        'animate__faster'
                )
        }       
        return (
                <div className={
                        `account_info_wrapper ${accountInfoDisplayed && 'animate__animated animate__slideInLeft animate__faster'}`
                        }
                >
                        <div className="account_info">
                                <div className="account_info_head">
                                        <div className="account_info_label">
                                                <h3>Account info</h3>
                                        </div>
                                        <div className="close" onClick={handleCloseAccountInfo}>
                                                <i className="fas fa-times"></i>
                                        </div>
                                </div>
                                <div className="account_info_body">
                                        <div className="profile_image_and_add_account">
                                                <div className="profile_image_info">
                                                        <div className="image_wrapper">
                                                                <img src={naya_willis} alt="profile pic"/>
                                                        </div>
                                                </div>
                                                <div className="add_account">
                                                        <i className="fas fa-plus"></i>
                                                </div>
                                        </div>
                                        <div className="user_name_at_name">
                                                <div className="user_name">
                                                        <h5>WhatYouCodingBoutWillis</h5>
                                                </div>
                                                <div className="at_name">
                                                        @naya_willis
                                                </div>
                                        </div>
                                        <div className="follower_info">
                                                <div className="following">
                                                        <span className="amount">20m</span> <span className='label'>Following</span>
                                                </div>
                                                <div className="followers">
                                                        <span className="amount">20m</span> <span className='label'>Followers</span>
                                                </div>
                                        </div>
                                        <div className="part_a">
                                                <ul>
                                                        <li>
                                                                <div className="profile_icon icon">
                                                                        <i className="far fa-user"></i>
                                                                </div>
                                                                <div className="label">Profile</div>
                                                        </li>
                                                        <li>
                                                                <div className="lists_icon icon">
                                                                        <i className="far fa-list-alt"></i>
                                                                </div>
                                                                <div className="label">Lists</div>
                                                        </li>
                                                        <li>
                                                                <div className="topics_icon icon">
                                                                        <i className="far fa-comment-dots"></i>
                                                                </div>
                                                                <div className="label">Topics</div>
                                                        </li>
                                                        <li>
                                                                <div className="bookmarks_icon icon">
                                                                        <i className="far fa-bookmark"></i>
                                                                </div>
                                                                <div className="label">Bookmarks</div>
                                                        </li>
                                                        <li>
                                                                <div className="moments_icon icon">
                                                                        <i className="fas fa-bolt"></i>
                                                                </div>
                                                                <div className="label">Moments</div>
                                                        </li>
                                                </ul>
                                        </div>
                                        <div className="part_b">
                                                <ul>
                                                        <li>
                                                                <div className="twitter_ads_icon icon">
                                                                        <i className="fas fa-chart-line"></i>
                                                                </div>
                                                                <div className="label">Twitter Ads</div>
                                                        </li>
                                                        <li>
                                                                <div className="moments_icon icon">
                                                                        <i className="far fa-chart-bar"></i>
                                                                </div>
                                                                <div className="label">Analytics</div>
                                                        </li>
                                                </ul>
                                        </div>
                                        <div className="part_c">
                                                <ul>
                                                        <li>
                                                                <div className="settings_and_privacy_icon icon">
                                                                        <i className="fas fa-cog"></i>
                                                                </div>
                                                                <div className="label">Settings and privacy</div>
                                                        </li>
                                                        <li>
                                                                <div className="help_center_icon icon">
                                                                        <i className="far fa-question-circle"></i>
                                                                </div>
                                                                <div className="label">Help Center</div>
                                                        </li>
                                                </ul>
                                        </div>
                                        <div className="part_d">
                                                <ul>
                                                        <li>
                                                                <div className="data_saver_icon icon">
                                                                        <i className="fas fa-chart-pie"></i>
                                                                </div>
                                                                <div className="label">Data saver</div>
                                                        </li>
                                                        <li>
                                                                <div className="display_icon icon">
                                                                        <i className="fas fa-paint-brush"></i>
                                                                </div>
                                                                <div className="label">Display</div>
                                                        </li>
                                                </ul>
                                        </div>
                                        <div className="part_e">
                                                <ul>
                                                        <li>
                                                                Log out
                                                        </li>
                                                </ul>
                                        </div>
                                </div>
                        </div>
                        <div className="overlay animate__animated animate__fadeIn animate_faster"  onClick={handleCloseAccountInfo}></div>
                </div>
        )
}

export default AccountInfo
