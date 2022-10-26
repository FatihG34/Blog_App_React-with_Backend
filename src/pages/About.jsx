import React, { useContext } from 'react'
import { AuthContextProv } from '../context/AuthContext'

const About = () => {
  const { currentUser } = useContext(AuthContextProv)
  return (
    <div>
      <div>
        <img src={currentUser.profile_pic} alt={currentUser.username} />
        {/* <h2>{currentUser.username}</h2> */}
      </div>



      {currentUser.id}</div>
  )
}

export default About