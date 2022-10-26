import { Grid } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BlogForm from '../components/blogform/BlogForm'
import { AuthContextProv } from '../context/AuthContext'
import { BlogDataContext } from '../context/BlogContext'

const NewBlog = () => {
    const [createBlog, setCreateBlog] = useState("")
    const { currentUser } = useContext(AuthContextProv)
    const { createPost, getCategories } = useContext(BlogDataContext)
    const navigate = useNavigate()
    const submitButtonInnerContent = 'Add New Blog Post';
    const handleChange = (e) => {
        // e.preventDefault()
        const { name, value } = e.target
        setCreateBlog({ ...createBlog, [name]: value })
        console.log(name, value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        createPost(createBlog, navigate)
        console.log(createBlog);
        setCreateBlog("")
    }
    console.log(createBlog);
    useEffect(() => {
        getCategories()
    }, [])

    return (
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ maxHeight: '100vh', marginTop: '10px' }}
        >
            <Grid item width={'30%'}>
                <BlogForm handleChange={handleChange} handleSubmit={handleSubmit} posts={createBlog} buttonInnerText={submitButtonInnerContent} />
            </Grid>
        </Grid>
    )
}

export default NewBlog