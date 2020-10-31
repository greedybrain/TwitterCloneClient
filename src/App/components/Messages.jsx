import React, { useEffect, useState } from 'react'
import Tweets from '../../HomePage/components/Tweets'
import faker from 'faker'
import Message from '../../HomePage/components/Message'
import './Messages.css'
import CreateMessageButton from './CreateMessageButton'

const Messages = () => {
        const [messages, setMessages] = useState([])
        const getFakeDataToMakeMessages = () => {
                const messagesToRender = []
                for(let i=0; i < 6; i++) {
                        messagesToRender.push({ 
                                name: faker.name.findName(),
                                image: faker.image.avatar(),
                                username: faker.internet.userName(),
                                content: faker.lorem.sentences(1),
                        })
                }
                setMessages(messagesToRender)
        }

        useEffect(() => {
                getFakeDataToMakeMessages()
        }, [])
        const renderMessages = messages.map((user, index) => <Message user={user} key={index} />)

        const handleOnFocus = event => {
                const searchArea = event.target.parentElement.parentElement
                searchArea.style.backgroundColor = "#fff"
                searchArea.style.border = "1px solid #1DA1F2"
                searchArea.firstElementChild.firstElementChild.style.color = "#1DA1F2"
        }

        const handleBlur = event => {
                const searchArea = event.target.parentElement.parentElement
                searchArea.style.backgroundColor = "#eeeeeeda"
                searchArea.style.border = "none"
                searchArea.firstElementChild.firstElementChild.style.color = "#a8a8a8"
        }

        return (
                <>
                        <header className='header'> 
                                <div className="image_and_label">
                                        <div className="profile_image">
                                                {/* profile image  */}
                                                {/* <img src={naya_willis_image} alt="profile pic"/> */}
                                        </div>
                                        <div className="label">
                                                {/* label  */}
                                                <h2>Messages</h2>
                                        </div>
                                </div>
                        </header>
                        <div className="messages_wrapper">
                                <div className="search_form">
                                        <div className="search_area">
                                                <div className="search_icon">
                                                        <i className="fas fa-search"></i>
                                                </div>
                                                <div className="search">
                                                        <input type="text" placeholder="Search for people and groups" onFocus={handleOnFocus} onBlur={handleBlur} />
                                                </div>
                                        </div>
                                </div>
                                <div className="messages">
                                        { renderMessages }
                                </div>
                                <CreateMessageButton />
                        </div>
                </>
        )
}

export default Messages