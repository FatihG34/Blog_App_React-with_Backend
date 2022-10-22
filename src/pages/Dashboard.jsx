import { Box, Typography } from '@mui/material';
import BlogCard from '../components/blogcard/BlogCard';
import Loading from '../assets/loading.gif'
import { useContext, useEffect, useState } from 'react';
import { BlogDataContext } from '../context/BlogContext';

const Dashboard = () => {
    const { blogPosts, getBlogPosts } = useContext(BlogDataContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getBlogPosts()
        setIsLoading(false)
    }, [])


    if (isLoading) {
        return (
            <div style={{ backgroundColor: 'black', height: '93.35vh', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <img src={Loading} alt="Loading..." width={'800'} />
            </div>
        )
    }
    // console.log(blogPosts)

    return (
        <Box sx={{ textAlign: 'center', fontFamily: 'Girassol, cursive' }} >
            <Typography variant='h3' sx={{ fontFamily: 'Girassol, cursive' }} >-Dashboard-</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 4, mt: 4, textAlign: 'left' }}>
                {blogPosts?.map((post, index) => (
                    <BlogCard blogData={post} key={index} />
                ))}
                {/* burda gelen data ekrana işleniyor */}
            </Box>
        </Box >
    );
}
export default Dashboard