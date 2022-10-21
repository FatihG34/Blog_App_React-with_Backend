import * as React from 'react';
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
import { useNavigate } from 'react-router';



export default function BlogCard({ data }) {
    const navigate = useNavigate();
    console.log(data);
    return (
        <Card sx={{ maxWidth: 345, width: 350, height: 470, position: "relative" }}>
            <div onClick={() => navigate(`/details/${data.slug}`, { state: { data } })} style={{ cursor: 'pointer' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={data.image}
                    alt={data.title}
                />
                <CardContent sx={{ bgcolor: '#81abc2', height: 120 }}>
                    <Typography variant='h6'>{data.title}</Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: '4',
                            WebkitBoxOrient: 'vertical',
                        }}
                    >
                        {data.content}
                    </Typography>
                </CardContent>
            </div>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: green[500] }} aria-label="blog">
                        {((data.author).slice(0, 1)).toUpperCase()}
                    </Avatar>
                }
                title={data.author.toUpperCase()}
                subheader={(new Date(data.published_date).toUTCString()).slice(0, 16)}
            // subheader={data.published_date}
            />
            <CardActions disableSpacing sx={{ position: "absolute", bottom: "5px", left: "5px" }}>
                <IconButton aria-label="like">
                    <FavoriteIcon />
                    <Typography sx={{ ml: 1 }}>
                        {data.like_count}
                    </Typography>
                </IconButton>
                <IconButton aria-label="view">
                    <VisibilityTwoToneIcon />
                    <Typography sx={{ ml: 1 }}>
                        {data.post_view_count}
                    </Typography>
                </IconButton>
                <IconButton aria-label="comment">
                    <ChatBubbleOutlineOutlinedIcon />
                    <Typography sx={{ ml: 1 }}>
                        {data.comment_count}
                    </Typography>
                </IconButton>
            </CardActions>
        </Card>
    );
}
