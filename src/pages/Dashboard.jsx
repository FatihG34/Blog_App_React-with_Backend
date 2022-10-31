import { Box, Button, Typography } from '@mui/material';
import BlogCard from '../components/blogcard/BlogCard';
import Loading from '../assets/loading.gif'
import { useContext, useEffect, useState } from 'react';
import { BlogDataContext } from '../context/BlogContext';
import { blueGrey } from '@mui/material/colors'

const Dashboard = () => {
    const { blogPosts, getBlogPosts, setPage, page } = useContext(BlogDataContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getBlogPosts()
        setIsLoading(false)
    }, [page])

    if (isLoading) {
        return (
            <div style={{ backgroundColor: 'black', height: '100vh', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <img src={Loading} alt="Loading..." width={'800'} />
            </div>
        )
    }
    // console.log(blogPosts)

    return (
        <>
            <Typography variant='h3' sx={{ fontFamily: 'Girassol, cursive', textAlign: 'center' }} >-Dashboard-</Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, marginY: '1rem' }}>
                {blogPosts?.map((post, index) => (
                    <BlogCard blogData={post} key={index} />
                ))}
                {/* burda gelen data ekrana işleniyor */}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '60%', margin: '2rem auto' }}>
                <Button onClick={() => setPage(page > 6 ? (page - 6) : (page))} variant="contained" color="secondary" startIcon={null}>View Less</Button>
                <Button onClick={() => setPage(page + 6)} variant="contained" color="warning" startIcon={null}>View More</Button>
            </Box>
        </>
    );
}
export default Dashboard