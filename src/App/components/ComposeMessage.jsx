import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './ComposeMessage.css'
import SearchResults from './SearchResults'
import mosh from '../../Images/mosh.jpg'
import brad from '../../Images/brad.jpg'
import ninja from '../../Images/ninja.jpg'
import phase from '../../Images/codingphase.jpg'

const ComposeMessage = () => {
        const history = useHistory()
        const searchableTweeters = [
                {
                        name: "Moshfegh Hamedani",
                        atName: "@moshhamedani",
                        pic: mosh,
                        isFollowing: true
                },
                {
                        name: "Brad Traversy",
                        atName: "@traversymedia",
                        pic: brad,
                        isFollowing: true
                },
                {
                        name: "CodingPhase",
                        atName: "@codingphase",
                        pic: phase,
                        isFollowing: true
                },
                {
                        name: "The Net Ninja",
                        atName: "@thenetninjauk",
                        pic: ninja,
                        isFollowing: true
                },

        ]
        const [tweeters, setTweeters] = useState(searchableTweeters)
        const [query, setQuery] = useState('')

        const handleOnChange = event => {
                let query = event.target.value
                setQuery(query)
                let lowercaseQuery = query.toLowerCase()
                const results = tweeters.filter(tweeter => 
                        tweeter.name.toLowerCase().includes(lowercaseQuery) || 
                        tweeter.atName.toLowerCase().includes(lowercaseQuery) || 
                        tweeter.name.toLowerCase() === lowercaseQuery || 
                        tweeter.atName.toLowerCase() === lowercaseQuery)
                setTweeters(results)
        }
        return (
                <div className="compose_message_wrapper">
                        <div className="head">
                                <div className="close_and_label">
                                        <div className="close">
                                                <i className="fas fa-times" onClick={() => history.goBack()}></i>
                                        </div>
                                        <div className="label">
                                                <h3>New message</h3>
                                        </div>
                                </div>
                                <div className="next_button">
                                        <button disabled>Next</button>
                                </div>
                        </div>

                        <div className="search_area">
                                <form>
                                        <div className="search_button">
                                                <button type="submit">
                                                        <i className="fas fa-search"></i>
                                                </button>
                                        </div>
                                        <div className="search_bar">
                                                <input 
                                                        type="text" 
                                                        name="search" 
                                                        value={query} 
                                                        placeholder="Search people"
                                                        onChange={handleOnChange}
                                                />
                                        </div>
                                </form>
                        </div>

                        <SearchResults results={results} />
                </div>
        )
}

export default ComposeMessage
