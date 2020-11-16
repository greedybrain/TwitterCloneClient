import React from 'react'
import { Link } from 'react-router-dom'
import './CreateTweetButton.css'

const CreateTweetButton = () => {
        return (
                <Link to="/compose/tweet">
                        <div className="create_tweet">
                                <i className="fas fa-feather-alt"></i>
                        </div>
                </Link>
        )
}

export default CreateTweetButton
