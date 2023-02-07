import { Box, CardMedia, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AuthContextProv } from '../context/AuthContext'
import FG from "../assets/kartal_transparent.png"

const About = () => {
  // const { currentUser } = useContext(AuthContextProv)
  return (
    <Box sx={{
      height: '100vh',
      backgroundImage: 'url("https://www.mayerbrown.com/-/media/images/image-banks/thought-leadership/abstract/blue-points-and-lines.jpg")', backgroundRepeat: "no-repeat",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      padding: '1rem'
    }} >
      <Box sx={{
        display: 'flex', flexDirection: { xs: "column-reverse", sm: 'column-reverse', md: 'row' }, justifyContent: { xs: 'center', md: 'space-evenly' }, alignContent: 'center', gap: 5, margin: '3rem auto', backgroundColor: '#ffe7ca51'
      }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', gap: 3 }}>
          <Typography component="h2" variant="h4" >Hi, I'm Fatih GÜNAYDIN</Typography>
          <Typography component="h2" variant="h6">I'm Full Stack Developer</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', gap: 3 }}>
          <CardMedia
            component="img"
            alt="Fatih"
            height="240"
            image={FG}
            sx={{ borderRadius: '50%', maxWidth: { xs: "200px", sm: "250px", md: "250px" } }}
          />
        </Box>
      </Box>
      <Box>
        <Typography>
          I interested in writing codes, skilled at developing complex solutions, creating responsive designs, possessing strong creative thinking skills, high energy and integrity. Ability to create algorithms effectively, and interact positively and communicate appropriately with team members, leading with team where it necessary. Quickly grasp new technologies and concepts to develop innovative and creative solutions to problems. Every time eager to learn various technologies, tools and libraries. Especially interested in the Front end/Web Development, HTML, CSS, JS, React. Excited to learn new things and improve, lifetime student.
        </Typography>
      </Box>
    </Box>
  )
}

export default About