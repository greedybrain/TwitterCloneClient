import React, { useEffect, useState } from 'react'
import faker from 'faker'
import './Tweets.css'
import Tweet from './Tweet'

const Tweets = () => {
        const [tweets, setTweets] = useState([])
        const getFakeDataToMakeTweets = () => {
                const tweetsToRender = []
                for(let i=0; i < 100; i++) {
                        tweetsToRender.push({ 
                                name: faker.name.findName(),
                                image: faker.image.avatar(),
                                username: faker.internet.userName(),
                                content: faker.lorem.sentences(2),
                                contentImage: faker.image.image(),
                                hashTags: faker.random.words()
                        })
                }
                setTweets(tweetsToRender)
        }

        useEffect(() => {
                getFakeDataToMakeTweets()
        }, [])
        const renderTweets = tweets.map((user, index) => <Tweet key={index} user={user} />)
        
        return (
                <ul className="tweets_wrapper">
                        {renderTweets}
                </ul>
        )
}

export default Tweets
