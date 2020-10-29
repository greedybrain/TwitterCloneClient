import React from 'react'
import faker from 'faker'
import './Tweets.css'

const Tweets = () => {
        const avatarsToRender = []
        for(let i=0; i < 50; i++) {
                let avatar = faker.image.avatar()
                avatarsToRender.push(avatar)
        }
        const renderAvatars = avatarsToRender.map((ava, index) => {
                return <img key={index} src={ava} alt='pic' />
        })
        return (
                <ul className="tweets_wrapper">
                        {renderAvatars}
                </ul>
        )
}

export default Tweets
