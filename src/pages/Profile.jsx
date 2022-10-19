import React, { useContext } from 'react'
import { AuthContextProv } from '../context/AuthContext'

const Profile = () => {
    const { currentUser } = useContext(AuthContextProv)
    return (
        <div>Profile</div>
    )
}

export default Profile