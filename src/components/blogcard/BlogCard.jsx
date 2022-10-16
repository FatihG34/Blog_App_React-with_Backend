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
import { useNavigate } from 'react-router';


export default function BlogCard({ data }) {
    const navigate = useNavigate();
    return (
        <Card sx={{ maxWidth: 345 }}>
            <div onClick={() => navigate('/details', { state: { data } })} style={{ cursor: 'pointer' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={data.imageUrl}
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
                            WebkitLineClamp: '3',
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
                        {(data.bloger.blogerName).slice(0, 1)}
                    </Avatar>
                }
                title={data.bloger.blogerEmail}
                subheader={data.blogCreateTime}
            />
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ChatBubbleOutlineOutlinedIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
