import React from 'react'
import './ComposeTweet.css'
import naya_willis_image from '../../Images/naya_willis.jpg'

const ComposeTweet = ({ history }) => {
        return (
                <div className="compose_tweet_wrapper">
                        <div className="compose_tweet_head">
                                <div className="arrow">
                                        <i className="fas fa-arrow-left" onClick={() => history.goBack()}></i>
                                </div>
                                <div className="tweet_submit">
                                        <button disabled>Tweet</button>
                                </div>
                        </div>
                        <div className="compose_tweet_body">
                                <div className="profile_image_section">
                                        <div className="image_wrapper">
                                                <img src={naya_willis_image} alt="pic"/>
                                        </div>
                                </div>
                                <div className="tweet_create_area">
                                        <div className="content">
                                                <textarea placeholder="What's happening?">
                                                
                                                </textarea>
                                        </div>
                                        <div className="who_can_reply">
                                                <div className="earth_icon">
                                                        <i className="fas fa-globe-americas"></i>
                                                </div>
                                                <div className="label">
                                                        Everyone can reply
                                                </div>
                                        </div>
                                        <div className="compose_tweet_footer">
                                                <ul>
                                                        <li className="upload">
                                                                <i className="far fa-image"></i>
                                                        </li>
                                                        <li className="gif_video">
                                                                <i className="fas fa-photo-video"></i>
                                                        </li>
                                                        <li className="chart">
                                                                <i className="fas fa-chart-bar"></i>
                                                        </li>
                                                        <li className="smile">
                                                                <i className="far fa-smile"></i>
                                                        </li>
                                                        <li className="calendar">
                                                                <i className="far fa-calendar-plus"></i>
                                                        </li>
                                                </ul>
                                        </div>            
                                </div>
                        </div>
                </div>
        )
}

export default ComposeTweet
