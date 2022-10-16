import React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';

const BlogForm = ({ handleChange, handleSubmit, blogData }) => {
    console.log('blogForm da ki blogData:', blogData);
    return (
        <form
            onSubmit={handleSubmit}
        >
            <Stack spacing={3} direction='column' >
                <TextField
                    label='Title *'
                    type='text'
                    name='title'
                    value={blogData.title}
                    id="outlined-size-normal"
                    required
                    onChange={(e) => handleChange(e)}
                />
                <TextField
                    label='Image URL *'
                    type='url'
                    name='imageUrl'
                    value={blogData.imageURL}
                    id="outlined-size-normal"
                    onChange={handleChange}
                    // onChange={handleChange} same with above
                    required
                />
                <TextField
                    label='Content *'
                    name='content'
                    value={blogData.content}
                    multiline
                    rows={12}
                    maxRows={18}
                    onChange={handleChange}
                />
                <Button
                    variant='contained'
                    type='submit'
                    value='submit'
                >Submit</Button>
            </Stack>
        </form>
    )
}

export default BlogForm