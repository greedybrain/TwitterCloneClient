import React from 'react'
import { Link } from 'react-router-dom'
import './CreateMessageButton.css'

const CreateMessageButton = () => {

        return (
                <Link to='/messages/compose'>
                        <div className="create_message">
                                <i className="far fa-envelope"></i>
                        </div>
                </Link>
        )
}

export default CreateMessageButton
