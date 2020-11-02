import React from 'react'
import './ProfileImageOpensAccountInfo.css'

const ProfileImageOpensAccountInfo = ({ setAccountInfoDisplayed }) => {
        const handleShowAccountInfo = () => {
                setAccountInfoDisplayed(true)
        }
        return (
                <div className="profile_image" onClick={handleShowAccountInfo}></div>
        )
}

export default ProfileImageOpensAccountInfo
