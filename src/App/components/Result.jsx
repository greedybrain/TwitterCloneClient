import React from 'react'
import './SearchResult.css'

const Result = ({ result }) => {
        return (
                <div className="search_result">
                        { result.isFollowing && ( 
                                <div className="following_or_not">
                                        <div className="icon">
                                                <i class="fas fa-user"></i>
                                        </div>
                                        <div className="label">
                                                Following
                                        </div>
                                </div>
                        ) }
                        <div className="image_and_content">
                                <div className="image">
                                        <div className="image_wrapper">
                                                <img src={result.pic} alt="pic"/>
                                        </div>
                                </div>
                                <div className="content">
                                        <div className="name">
                                                {result.name}
                                        </div>
                                        <div className="at_name">
                                                {result.atName}
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Result
