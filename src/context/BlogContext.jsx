import axios from 'axios'
import React, { createContext, useState } from 'react'
import { toastErrorNotify, toastSuccessNotify } from '../helper/helper';
// import { AuthContextProv } from './AuthContext';


export const BlogDataContext = createContext()
// const url = 'https://fatihg.pythonanywhere.com/';
// const url = "http://127.0.0.1:8000/";
const url = "http://localhost:8000/";

const BlogContext = ({ children }) => {
    const [blogPosts, setBlogposts] = useState([]);  //* for home  page
    const [blogDetail, setBlogDetail] = useState([]); //* for blogDetail page
    const [category, setCategory] = useState([]);
    const [deatilLoading, setDeatilLoading] = useState(true); //* for blogDetail page
    const [loadingCategory, setLoadingCategory] = useState(true);
    const [userPosts, setUserPosts] = useState([])
    const [page, setPage] = useState(6);
    // const { currentUser } = useContext(AuthContextProv)

    const getCategories = async () => {
        try {
            const res = await axios.get(`${url}blog/category/`);
            setCategory(res.data);
            sessionStorage.setItem("categories", JSON.stringify(res.data));
            // console.log(category)
            setLoadingCategory(false);
        } catch (error) {
            toastErrorNotify(error.message);
        }
    };
    const getBlogPosts = async () => {
        try {
            const res = await axios.get(`${url}blog/posts/?limit=${page}&offset=0`)
            setBlogposts(res.data.results)
        } catch (error) {
            toastErrorNotify(error.message);
        }
    };
    const getOneBlogPost = async (slug) => {
        const token = window.atob(sessionStorage.getItem('token'));
        try {
            let config = {
                method: 'get',
                url: `${url}blog/posts/${slug}`,
                headers: {
                    'Authorization': `Token ${token}`,
                }
            };
            const result = await axios(config);
            setBlogDetail(result.data);
            setDeatilLoading(false);
            console.log(result.data);
        } catch (error) {
            toastErrorNotify(error.message);
        }
    };
    const createPost = async (blogData, navigate) => {
        const token = window.atob(sessionStorage.getItem('token'));
        try {
            const config = {
                method: 'post',
                url: `${url}blog/posts/`,
                headers: {
                    'Authorization': `Token ${token}`,
                },
                data: blogData
            };

            const res = await axios(config);
            if (res.status === 201) {
                getBlogPosts();
                navigate('/');
                toastSuccessNotify('Blog created successfully');
            }
            // navigate('/newblog')
        } catch (error) {
            toastErrorNotify(error.message);
        }
    };
    const updatePost = async (slug, navigate, data) => {
        const token = window.atob(sessionStorage.getItem('token'));
        const config = {
            method: 'put',
            url: `${url}blog/posts/${slug}/`,
            headers: {
                'Authorization': `Token ${token}`,
            },
            data: data
        };
        try {
            const res = await axios(config)
            if (res.status === 200) {
                toastSuccessNotify('Congrats Blog Updated Successfuly')
                navigate(-1)
            }
        } catch (error) {
            toastErrorNotify(error.message)
        }
    }
    const deletePost = async (slug, navigate) => {
        const token = window.atob(sessionStorage.getItem('token'));
        const config = {
            method: 'delete',
            url: `${url}blog/posts/${slug}/`,
            headers: {
                'Authorization': `Token ${token}`,
            },
        };
        try {
            const res = await axios(config)
            if (res.status === 204) {
                toastSuccessNotify('Deleted Successfuly')
                navigate(-1)
            }
        } catch (error) {
            toastErrorNotify(error.message)
        }

    }
    const postLike = async (user, post_id, slug) => {
        const token = window.atob(sessionStorage.getItem('token'));
        const data = {
            "user_id": user,
            "post": post_id
        };
        const config = {
            method: 'post',
            url: `${url}blog/like/`,
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
            },
            data: data
        };
        try {
            const res = await axios(config);
            console.log("Burda mısın?");
            if (res.status === 200 || res.status === 201) {
                console.log("Yoksa burda mısın?");
                getOneBlogPost(slug);
                toastSuccessNotify('Thanks a lot')
            }
        } catch (error) {
            console.log(error);
            toastErrorNotify(error.message);
        }
    }
    const setComments = async (slug, commendData) => {
        const token = window.atob(sessionStorage.getItem('token'));
        const commentUrl = url + `blog/posts/${slug}/add_comment/`;
        try {
            const data = {
                "content": commendData
            };
            var config = {
                method: 'post',
                url: commentUrl,
                headers: {
                    'Authorization': `Token ${token}`,
                    'Content-Type': 'application/json'
                },
                data: data
            };
            const res = await axios(config)
            if (res.status === 200 || res.status === 201) {
                getBlogPosts()
            }
        } catch (error) {
            toastErrorNotify(error.message,)
        }
    }
    const usersAllPosts = async () => {
        const token = window.atob(sessionStorage.getItem('token'));
        const config = {
            method: 'get',
            url: `${url}blog/all-posts/`,
            headers: {
                'Authorization': `Token ${token}`,
                'Cookie': 'csrftoken=hg8jtk9cKr6iaVG9AY6j7ynqx0s18Ulx; sessionid=crcnox2a76sf9d54b1bga52ksj7yxpwt'
            }
        };
        try {
            const res = await axios(config)
            setUserPosts(res.data)
        } catch (error) {
            toastErrorNotify(error.message)
        }
    }
    const value = {
        getCategories,
        category,
        loadingCategory,
        blogPosts,
        setBlogposts,
        getBlogPosts,
        blogDetail,
        deatilLoading,
        getOneBlogPost,
        postLike,
        setComments,
        createPost,
        setPage,
        page,
        updatePost,
        deletePost,
        usersAllPosts,
        userPosts
    }
    return (
        <BlogDataContext.Provider value={value}>
            {children}
        </BlogDataContext.Provider>
    )
}

export default BlogContext