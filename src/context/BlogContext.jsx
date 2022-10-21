import axios from 'axios'
import React, { createContext, useState } from 'react'
import { toastErrorNotify, toastSuccessNotify } from '../helper/helper';


export const BlogDataContext = createContext()

const url = "http://127.0.0.1:8000/"

const BlogContext = ({ children }) => {
    // const [posts, setPosts] = useState(JSON.parse(sessionStorage.getItem("posts")) || initialValue)
    const [posts, setPosts] = useState(JSON.parse(sessionStorage.getItem("posts")) || [])
    const [category, setCategory] = useState(JSON.parse(sessionStorage.getItem("categories")) || "")

    const getCategories = async () => {
        try {
            const res = await axios.get(`${url}blog/category/`)
            setCategory(res.data)
            sessionStorage.setItem("categories", JSON.stringify(res.data))
            console.log(category)
        } catch (error) {
            toastErrorNotify(error.message);
        }
    }

    const getBlogPosts = async () => {
        try {
            const res = await axios.get(`${url}blog/posts/`)
            setPosts(res.data.results)
            sessionStorage.setItem("posts", JSON.stringify(res.data.results))
            // console.log(res.data.results);
        } catch (error) {
            toastErrorNotify(error.message);
        }
    }

    const createPost = async (blogData) => {
        try {
            const res = await axios.post(`${url}blog/posts/`, blogData)
            if (res.status === 200) {
                getBlogPosts()
                toastSuccessNotify('Blog created successfully')
            }
        } catch (error) {
            toastErrorNotify(error.message);
        }
    }
    const updateGetPost = async (slug, token, user_id, post_id) => {
        //? for view count increase
        try {
            const data = JSON.stringify({
                "user": user_id,
                "post": post_id
            });
            const config = {
                method: 'get',
                url: `${url}blog/posts/${slug}`,
                headers: {
                    'Authorization': `Token ${token}`,
                    'Content-Type': 'application/json',
                    'Cookie': 'csrftoken=hg8jtk9cKr6iaVG9AY6j7ynqx0s18Ulx; sessionid=crcnox2a76sf9d54b1bga52ksj7yxpwt'
                },
                // data: data
            };
            const res = await axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                    // toastErrorNotify(error.message);
                });
        } catch (error) {
            toastErrorNotify(error.message);
        }
    }
    const postLike = async (like) => {
        try {
            const res = await axios.post(`${url}blog/like/`, like)
            if (res.status !== 200) {
                console.log(res);
                toastSuccessNotify('Thanks a lot')
            }
        } catch (error) {
            toastErrorNotify(error.message);
        }
    }

    const value = {
        posts,
        setPosts,
        getCategories,
        getBlogPosts,
        createPost,
        postLike,
        updateGetPost
    }
    return (
        <BlogDataContext.Provider value={value}>
            {children}
        </BlogDataContext.Provider>
    )
}

export default BlogContext