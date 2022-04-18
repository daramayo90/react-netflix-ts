/*
Global component that wraps the App component from index.jsx

First of all, a context should be created using createContext: 'AuthContext'
The 'AuthContext.Provider' is the one who sends the information to the childrens: 'contextValue'

The Initial State of the user should has the user at the moment of the login
If there is no user, the value it's null (firts login)
*/

import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();
const local = JSON.parse(localStorage.getItem('user'));

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        if (local) return local;
        else return null;
    });

    //Save credentials in Local Storage
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    /// Check the Login page
    const login = async (userCredentials) => {
        try {
            await axios.post("auth/login", userCredentials);
            setUser(userCredentials);
        } catch (error) {
            console.log(error);
        }
    };

    // Check the Register page
    const register = async (userCredentials) => {
        try {
            await axios.post("auth/register", userCredentials);
            setUser(userCredentials);
        } catch (error) {
            console.log(error);
        }
    };

    // Check the Header component
    const logout = () => {
        setUser(null);
        localStorage.setItem('avatar', null);
    }

    // Information to be sent to the childrens
    const contextValue = {
        user,
        login,
        register,
        logout
    };

    // The information is sent to all the components (check the Index component)
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}