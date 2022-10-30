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

    // const handlePage = () => {
    //     setPage(page + 6)
    //     getPaginationPosts()
    // }

    if (isLoading) {
        return (
            <div style={{ backgroundColor: 'black', height: '100vh', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <img src={Loading} alt="Loading..." width={'800'} />
            </div>
        )
    }
    // console.log(blogPosts)

    return (
        <Box sx={{ textAlign: 'center', fontFamily: 'Girassol, cursive', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', height: '100vh', mt: { md: 40, xl: 40 }, mb: 20 }} >
            {/* <Typography variant='h3' sx={{ fontFamily: 'Girassol, cursive', marginY: '1rem' }} >-Dashboard-</Typography> */}

            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
                {
                    blogPosts.length < 1 ?
                        (
                            <Typography variant='h5'>There are no posts to display</Typography>
                        )
                        :
                        (blogPosts?.map((post, index) => (
                            <BlogCard blogData={post} key={index} />
                        ))
                        )
                }
                {/* burda gelen data ekrana işleniyor */}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '60%', margin: '2rem auto' }}>
                <Button onClick={() => setPage(page > 6 ? (page - 6) : (page))} variant="contained" color="secondary" startIcon={null}>View Less</Button>
                <Button onClick={() => setPage(page + 6)} variant="contained" color="warning" startIcon={null}>View More</Button>
            </Box>
        </Box >
    );
}
export default Dashboard