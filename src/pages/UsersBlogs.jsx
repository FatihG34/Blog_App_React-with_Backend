import { Box } from '@mui/material'
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
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 4, mt: 4, textAlign: 'left' }}>
            {userPosts?.map((post, index) => (
                <BlogCard blogData={post} key={index} />
            ))}
        </Box>
    )
}

export default UsersBlogs