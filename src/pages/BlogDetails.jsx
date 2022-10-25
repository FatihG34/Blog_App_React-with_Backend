import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import { useLocation } from 'react-router-dom';
import { BlogDataContext } from '../context/BlogContext';
import { AuthContextProv } from '../context/AuthContext';
import { useContext, useEffect, useState } from 'react';
import Loading from '../assets/loading.gif'
import { Box, Button, Divider, InputAdornment, List, ListItem, ListItemText, TextField } from '@mui/material';


const BlogDetails = () => {
    const [comment, setComment] = useState();
    const { currentUser } = useContext(AuthContextProv)
    const { blogDetail, getOneBlogPost, deatilLoading, postLike, setComments } = useContext(BlogDataContext)
    const { state } = useLocation();
    const { slug } = state

    console.log(blogDetail);

    const handleLike = (user, blog_id) => {
        console.log("burda neler oluyor");
        postLike(user, blog_id, slug)
    }
    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setComment(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setComments(slug, comment);
        setComment("");
    }



    useEffect(() => {
        getOneBlogPost(slug)
    }, [])

    if (deatilLoading) {
        return (
            <div style={{ backgroundColor: 'black', height: '93.35vh', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <img src={Loading} alt="Loading..." width={'800'} />
            </div>
        )
    }
    return (
        <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyContent: 'center', alignContent: 'center' }} sx={{ maxWidth: { xs: "100%", sm: "80%", md: "60%" }, marginX: "auto", marginY: 2 }}>
            <Card>
                <Box>
                    <CardMedia
                        component="img"
                        height="300"
                        image={blogDetail.image}
                        alt={blogDetail.title}
                    />
                    <CardContent sx={{ bgcolor: '#81abc2', height: 200 }}>
                        <Typography variant='h6'>{blogDetail.title}</Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            {blogDetail.content}
                        </Typography>
                    </CardContent>
                </Box>
                <Box sx={{ position: "relative", marginTop: 15 }}>
                    <CardHeader
                        sx={{ position: "absolute", bottom: "50px", left: "5px" }}
                        avatar={
                            <Avatar sx={{ bgcolor: green[500] }} aria-label="blog">
                                {((blogDetail.author).slice(0, 1)).toUpperCase()}
                            </Avatar>
                        }
                        title={blogDetail.author.toUpperCase()}
                        subheader={(new Date(blogDetail.published_date).toUTCString()).slice(0, 16)}
                    />
                    <CardActions disableSpacing sx={{ position: "absolute", bottom: "5px", left: "5px" }}>
                        <IconButton aria-label="like" onClick={() => handleLike(currentUser.id, blogDetail.id)} sx={{ color: (blogDetail.post_like?.filter((like) => like.user_id === currentUser.id)[0]?.user_id) && "red" }}>
                            <FavoriteIcon />
                            <Typography sx={{ ml: 1 }}>
                                {blogDetail.like_count}
                            </Typography>
                        </IconButton>
                        <IconButton aria-label="view">
                            <VisibilityTwoToneIcon />
                            <Typography sx={{ ml: 1 }}>
                                {blogDetail.post_view_count}
                            </Typography>
                        </IconButton>
                        <IconButton aria-label="comment">
                            <ChatBubbleOutlineOutlinedIcon />
                            <Typography sx={{ ml: 1 }}>
                                {blogDetail.comment_count}
                            </Typography>
                        </IconButton>
                    </CardActions>
                </Box>
            </Card>
            <Box>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginTop: 3 }}>
                    {blogDetail.post_comment.map((comment) => (
                        <>
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary={comment.user}
                                    secondary={
                                        <>
                                            <Typography
                                                sx={{ display: 'inline', mr: 2 }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {(new Date(comment.time_stamp).toUTCString()).slice(0, 16)}
                                            </Typography>
                                            <Typography
                                                component="p"
                                                variant="body2"
                                                color="text.secondary">
                                                {comment.content}
                                            </Typography>
                                        </>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </>
                    ))}
                </List>
            </Box>
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.8 }}>
                    <TextField
                        label="Comment"
                        name="comment"
                        id="comment"
                        type="text"
                        variant="outlined"
                        multiline
                        rows={6}
                        maxRows={18}
                        placeholder='Add a comment'
                        value={comment}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start' ></InputAdornment>
                            )
                        }}
                    />
                    <Button type="submit" variant="contained" size="large">
                        Add Comment
                    </Button>
                </Box>
            </form>
        </Box>
    )
}

export default BlogDetails