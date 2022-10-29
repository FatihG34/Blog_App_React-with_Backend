import { Box } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import React, { useContext, useEffect } from 'react'
import BlogCard from '../components/blogcard/BlogCard'
import { BlogDataContext } from '../context/BlogContext'

const UsersBlogs = () => {
    const { userPosts, usersAllPosts } = useContext(BlogDataContext)
    console.log(userPosts);
    useEffect(() => {
        usersAllPosts()
    }, [])

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 4, mt: 10, padding: 2, textAlign: 'left', height: '100vh' }}>
            {userPosts?.map((post, index) => (
                <BlogCard blogData={post} key={index} />
            ))}
        </Box>
    )
}

export default UsersBlogs