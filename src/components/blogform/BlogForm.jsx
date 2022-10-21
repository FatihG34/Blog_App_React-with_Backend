import React from 'react';
import TextField from '@mui/material/TextField';
import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, Stack } from '@mui/material';

const BlogForm = ({ handleChange, handleSubmit, posts }) => {
    return (
        <form
            onSubmit={handleSubmit}
        >
            <Stack spacing={3} direction='column' >
                <TextField
                    label='Title'
                    type='text'
                    name='title'
                    value={posts.title}
                    id="outlined-size-normal"
                    required
                    onChange={(e) => handleChange(e)}
                />
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Categories</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={posts.category}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>Categories</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    {/* <FormHelperText>With label + helper text</FormHelperText> */}
                </FormControl>
                <TextField
                    label='Image URL'
                    type='url'
                    name='imageUrl'
                    value={posts.image}
                    id="outlined-size-normal"
                    onChange={handleChange}
                    // onChange={handleChange} same with above
                    required
                />
                <TextField
                    label='Content'
                    name='content'
                    value={posts.content}
                    multiline
                    rows={12}
                    maxRows={18}
                    onChange={handleChange}
                />
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={posts.status}
                        label="Status"
                        required
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>Status</em>
                        </MenuItem>
                        <MenuItem value={"d"}>Draft</MenuItem>
                        <MenuItem value={"p"}>Published</MenuItem>
                    </Select>
                </FormControl>
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