import React, { useContext } from 'react'
import { AuthContextProv } from '../context/AuthContext'

const Profile = () => {
    const { currentUser } = useContext(AuthContextProv)
    return (
        <div style={{ margin: "5rem 15rem" }}>
            <div>
                <img src={currentUser.profile_pic} alt={currentUser.usrname} />
            </div>
            <div>
                <p>{currentUser.biography} </p>
            </div>
            <div>
                <button>Follow</button>
            </div>
        </div>
    )
}

export default Profile