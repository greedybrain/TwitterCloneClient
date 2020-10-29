import React from 'react'

const Tweet = () => {
        return (
                <div className="tweet">
                        <div className="tweet_head">

                        </div>
                        <div className="tweet_body">
                                <div className="tweeter">
                                        {/* profile image  */}
                                </div>
                                <div className="tweet_content">
                                        <div className="tweet_content_head">
                                                <div className="tweeter_name"></div>
                                                <div className="tweet_time"></div>
                                                <div className="tweet_settings"></div>
                                        </div>
                                        <div className="content">

                                        </div>
                                </div>
                                <div className="tweet_footer">
                                        <ul>
                                                <li className="comments item"></li>
                                                <li className="retweets item"></li>
                                                <li className="heart item"></li>
                                                <li className="other item"></li>
                                        </ul>
                                </div>
                        </div>
                </div>
        )
}

export default Tweet
