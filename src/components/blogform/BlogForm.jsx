import React from 'react';
import TextField from '@mui/material/TextField';
import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, Stack } from '@mui/material';

const BlogForm = ({ handleChange, handleSubmit, blogData }) => {
    console.log('blogForm da ki blogData:', blogData);
    return (
        <form
            onSubmit={handleSubmit}
        >
            <Stack spacing={3} direction='column' >
                <TextField
                    label='Title'
                    type='text'
                    name='title'
                    value={null}
                    id="outlined-size-normal"
                    required
                    onChange={(e) => handleChange(e)}
                />
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Categories</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={null}
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
                    <FormHelperText>With label + helper text</FormHelperText>
                </FormControl>
                <TextField
                    label='Image URL'
                    type='url'
                    name='imageUrl'
                    value={null}
                    id="outlined-size-normal"
                    onChange={handleChange}
                    // onChange={handleChange} same with above
                    required
                />
                <TextField
                    label='Content'
                    name='content'
                    value={null}
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