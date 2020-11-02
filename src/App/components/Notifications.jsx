import React from 'react'
import ProfileImageOpensAccountInfo from './ProfileImageOpensAccountInfo'
import './Notifications.css'
import { NavLink } from 'react-router-dom'
import tweet_user1 from  '../../Images/tweet_user.jpg'
import tweet_liker2 from '../../Images/tweet_liker_2.jpg'
import faker from 'faker'

const Notifications = ({ setAccountInfoDisplayed }) => {
        const fakeAvatars = {
                avatar1: faker.image.avatar(),
                avatar2: faker.image.avatar(),
                avatar3: faker.image.avatar(),
                avatar4: faker.image.avatar(),
                avatar5: faker.image.avatar()
        }        
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
                                <div className="all" style={{ borderBottom: "2px solid #1DA1F2" }}>
                                        <NavLink to="/notifications" activeClassName="notif_nav" style={{ color: "#1DA1F2" }}>
                                                All
                                        </NavLink>
                                </div>
                                <div className="mentions">
                                        <NavLink to="/notifications/mentions" activeClassName="notif_nav">
                                                Mentions
                                        </NavLink>
                                </div>
                        </div>
                        <div className="all_notifications">
                                <div className="sus_login">
                                        <div className="twitter_bird">
                                                <i className="fab fa-twitter"></i>
                                        </div>
                                        <div className="message">
                                                There was a login to your account @naya_willis from a new device on Oct 30, 2020. Review it now.
                                        </div>
                                </div>
                                <div className="recent_tweet">
                                        <div className="star">
                                                <i className="fas fa-star"></i>
                                        </div>
                                        <div className="recent_tweet_wrapper">
                                                <div className="recent_tweet_head">
                                                        <div className="person_who_tweeted">
                                                                <div className="tweeter_image_wrapper">
                                                                        <img src={tweet_user1} alt="pic"/>
                                                                </div>
                                                        </div>
                                                        <div className="settings">
                                                                <i className="fas fa-ellipsis-h"></i>
                                                        </div>
                                                </div>
                                                <div className="subject">
                                                        Recent Tweet from <strong>Emi / Pixi</strong> <span role='img' aria-label='fairy'>🧚🏻</span> <strong>#BLM</strong>
                                                </div>
                                                <div className="content">
                                                        Shout-out to nurses everywhere. My nurses, your nurses, all nurses everywhere. I love you so much. Thank you Two heartsFace with medical mask <span role='img' aria-label='hearts'>💕</span><span role='img' aria-label='medical emoji'>😷</span>
                                                </div>
                                        </div>         
                                </div>
                                <div className="liked_tweet">
                                        <div className="heart">
                                                <i className="fas fa-heart"></i>
                                        </div>
                                        <div className="liked_tweet_info">
                                                <div className="person_who_liked">
                                                        <div className="liker_image_wrapper">
                                                                <img src={tweet_liker2} alt="pic"/>
                                                        </div>
                                                </div>
                                                <div className="subject">
                                                        <strong>Jamal</strong> liked your Tweet
                                                </div>
                                                <div className="liked_pic">
                                                        <a href="pic.twitter.com/noWGEnFW39">pic.twitter.com/noWGEnFW39</a>
                                                </div>
                                        </div>
                                </div>
                                <div className="liked_tweet">
                                        <div className="heart">
                                                <i className="fas fa-heart"></i>
                                        </div>
                                        <div className="liked_tweet_info">
                                                <div className="person_who_liked">
                                                        <div className="liker_image_wrapper">
                                                                <img src={fakeAvatars.avatar1} alt="pic"/>
                                                        </div>
                                                        <div className="liker_image_wrapper">
                                                                <img src={fakeAvatars.avatar2} alt="pic"/>
                                                        </div>
                                                        <div className="liker_image_wrapper">
                                                                <img src={fakeAvatars.avatar3} alt="pic"/>
                                                        </div>
                                                        <div className="liker_image_wrapper">
                                                                <img src={fakeAvatars.avatar4} alt="pic"/>
                                                        </div>
                                                        <div className="liker_image_wrapper">
                                                                <img src={fakeAvatars.avatar5} alt="pic"/>
                                                        </div>
                                                </div>
                                                <div className="subject">
                                                        <strong>Marissa</strong> and 1m others liked your Twitter Clone
                                                </div>
                                                <div className="content">
                                                        I'm feeling very accomplished today. Did a Twitter clone for an apprenticeship. Hopefully it impresses them. <span role='img' aria-label="mind blown emoji">🤯 🤯</span>
                                                </div>
                                                <div className="liked_pic">
                                                        <a href="https://bit.ly/3oQdYFn">https://bit.ly/3oQdYFn</a>
                                                </div>
                                                <div className="hashtags">
                                                        #100DaysOfCode #DEVCommunity #programmer
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Notifications
