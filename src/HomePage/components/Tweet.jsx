import React from 'react'
import './Tweet.css'

const Tweet = ({ user }) => {
        return (
                <div className="tweet">
                        <div className="tweet_head">

                        </div>
                        <div className="tweet_body">
                                <div className="image_wrapper">
                                        <div className="tweeter">
                                                <img src={user.image} alt="pic"/>
                                        </div>
                                </div>
                                <div className="tweet_content">
                                        <div className="tweet_content_head">
                                                <div className="tweeter_name">
                                                        <span>
                                                                {user.name.length > 15 ? user.name.slice(0, 15)  : user.name} 
                                                                <span className="at_name"> @{ user.username.length > 2 ? user.username.slice(0, 2) + '...' : user.username }</span>
                                                        </span>
                                                </div>
                                                <div className="tweet_time">
                                                        <span className="bullet">•</span>
                                                        <span className="time"> 2h</span>
                                                </div>
                                                
                                        </div>
                                        <div className="content">
                                                {user.content}
                                        </div>
                                        <div className="tweet_footer">
                                                <ul>
                                                        <li className="comments item">
                                                                <i className="far fa-comment"></i>
                                                        </li>
                                                        <li className="retweets item">
                                                                <i className="fas fa-recycle"></i>
                                                        </li>
                                                        <li className="heart item">
                                                                <i className="far fa-heart"></i>
                                                        </li>
                                                        <li className="other item">
                                                                <i className="fas fa-share-alt"></i>
                                                        </li>
                                                </ul>
                                        </div>
                                </div>
                                <div className="tweet_settings">
                                        <i className="fas fa-ellipsis-h"></i>
                                </div>
                        </div>
                </div>
        )
}

export default Tweet
