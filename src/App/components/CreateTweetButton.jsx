import React from 'react'
import { useHistory } from 'react-router-dom'
import './CreateTweetButton.css'

const CreateTweetButton = () => {
        const history = useHistory()

        const goToComposeTweetPage = () => history.push('/compose/tweet')
        return (
                <div className="create_tweet" onClick={goToComposeTweetPage}>
                        <i className="fas fa-feather-alt"></i>
                </div>
        )
}

export default CreateTweetButton
