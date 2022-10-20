import { Grid } from '@mui/material'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import BlogForm from '../components/blogform/BlogForm'
import { AuthContextProv } from '../context/AuthContext'
import { BlogDataContext } from '../context/BlogContext'

const NewBlog = () => {
    const { currentUser } = useContext(AuthContextProv)
    const { posts, setPosts, createPost } = useContext(BlogDataContext)
    const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setPosts({ [name]: value })
    }
    const handleSubmt = (e) => {
        e.preventDefault()


    }

    return (
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh', marginTop: '10px' }}
        >
            <Grid item width={'50%'}>
                <BlogForm handleChange={handleChange} handleSubmt={handleSubmt} posts={posts} />
            </Grid>
        </Grid>
    )
}

export default NewBlog