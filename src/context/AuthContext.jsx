import axios from 'axios';
import React, { createContext, useState } from 'react'
const url = 'http://127.0.0.1:8000/';

export const AuthContextProv = createContext();
const userInitialValue = {
    "username": "",
    "email": "",
    "first_name": "",
    "last_name": "",
    "profile_pic": "",
    "biography": "",
    "password": "",
    "password1": "",
    "key": ""
}
// const userInfo = {
//     "username": username,
//     "email": email,
//     "first_name": first_name,
//     "last_name": last_name,
//     "profile_pic": profile_pic,
//     "biography": biography,
//     "password": password,
//     "password1": password1
// }
const AuthContext = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(userInitialValue)

    const createUser = async (userInfo) => {
        try {
            const res = await axios.post(`${url}auth/register/`, userInfo)
            if (res.data.token) {
                setCurrentUser(res.data)

                sessionStorage.setItem("currentUser", res.data)
            }
        } catch (error) {
            console.log(error);
        }

    }
    const value = {
        createUser,
        currentUser
    }
    return (
        <AuthContextProv.Provider value={value}>
            {children}
        </AuthContextProv.Provider>
    )
}

export default AuthContext