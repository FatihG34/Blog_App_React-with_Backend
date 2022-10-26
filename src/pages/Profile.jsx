import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { AuthContextProv } from '../context/AuthContext';
import UpgradeIcon from '@mui/icons-material/Upgrade';

const Profile = () => {
    const { currentUser } = useContext(AuthContextProv)
    return (
        <div style={{ margin: "5rem 15rem", display: 'flex', gap: 6 }}>
            <div>
                <img src={currentUser.profile_pic} alt={currentUser.usrname} />
            </div>
            <div>
                <h2>{currentUser.username}</h2>
                <p>{currentUser.biography} </p>
                <div>
                    <Button variant="contained" color="success" size="medium" startIcon={<UpgradeIcon />}>Update Profile</Button>
                </div>
            </div>

        </div>
    )
}

export default Profile