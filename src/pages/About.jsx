import { Box, CardMedia, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AuthContextProv } from '../context/AuthContext'
import FG from "../assets/newFG.jpg"

const About = () => {
  // const { currentUser } = useContext(AuthContextProv)
  return (
    <Box sx={{
      height: '100vh',
      backgroundImage: 'url("https://w0.peakpx.com/wallpaper/377/934/HD-wallpaper-abstract-3d-room-3d-abstract-box-room-square.jpg")', backgroundRepeat: "no-repeat",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      marginTop: '4rem',
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
            alt="green iguana"
            height="240"
            image={FG}
            sx={{ borderRadius: '50%', maxWidth: { xs: "200px", sm: "250px", md: "250px" } }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default About