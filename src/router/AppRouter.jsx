import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import NewBlog from '../pages/NewBlog';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import UpdateBlog from '../pages/UpdateBlog';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/about' element={<About />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/newblog' element={<NewBlog />} />
                <Route path='/update' element={<UpdateBlog />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter