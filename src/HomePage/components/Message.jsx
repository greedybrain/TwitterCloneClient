import React from 'react'
import './Message.css'

const Message = ({ user }) => {
        return (
                <div className="message_wrapper">
                        <div className="image_wrapper">
                                <div className="message_sender">
                                        <img src={user.image} alt="pic"/>
                                </div>
                        </div>
                        <div className="message_content">
                                <div className="message_content_head">
                                        <div className="sender_name">
                                                <span>
                                                        {user.name.length > 20 ? user.name.slice(0, 20)  : user.name} 
                                                        <span className="at_name"> @{ user.username.length > 5 ? user.username.slice(0, 5) + '...' : user.username }</span>
                                                </span>
                                        </div>
                                        <div className="message_time">
                                                <span className="bullet">•</span>
                                                <span className="time"> 2h</span>
                                        </div>
                                        
                                </div>
                                <div className="content">
                                        {user.content}
                                </div>
                        </div>
                </div>
        )
}

export default Message
