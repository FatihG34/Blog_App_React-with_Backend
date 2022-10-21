import { Box, Button, Typography } from '@mui/material';
// import { useFetch } from '../helpers/databaseFunctions'; burda gerekli data db den çekiliyor
import BlogCard from '../components/blogcard/BlogCard';
import Loading from '../assets/loading.gif'
import { useContext, useEffect } from 'react';
import { BlogDataContext } from '../context/BlogContext';

const Dashboard = () => {
    const { posts, getBlogPosts } = useContext(BlogDataContext)
    // const isLoading = false
    // const dataList = ["React"]
    // if (isLoading) {
    //     return <img src={Loading} alt="Loading..." />
    // }
    console.log(posts);

    useEffect(() => {
        getBlogPosts()
    }, [])


    return (
        <Box sx={{ textAlign: 'center', fontFamily: 'Girassol, cursive' }} >
            {/* <Button onClick={() => getBlogPosts()}>Get</Button> */}
            <Typography variant='h3' sx={{ fontFamily: 'Girassol, cursive' }} >-Dashboard-</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 4, mt: 4, textAlign: 'left' }}>
                {posts?.map((post, index) => (
                    <BlogCard data={post} key={index} />
                ))}
                {/* burda gelen data ekrana işleniyor */}
            </Box>
        </Box >
    );
}
export default Dashboard