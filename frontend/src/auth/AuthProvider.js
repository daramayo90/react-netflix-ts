//Componente global que envuelve App desde Index
//Luego, el Context.Provider es el que el envía la información a los children

import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

// Se exporta para que archivos externos puedan consumir dicho contexto
export const AuthContext = createContext();
const local = JSON.parse(localStorage.getItem('user'));

export default function AuthProvider({ children }) {
    //The initial State should have the user at the moment of the login
    //If there is no user, the value it's null (firts login)
    const [user, setUser] = useState(() => {
        if (local) return local;
        else return null;
    });

    //Save credentials in Local Storage
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    //Cuando la función 'login' sea ejecutada, almacenará al usuario
    //Las userCredentials serán envíadas al momento de hacer click en "Sign In" de la página "Login"
    //Hacemos la petición a la API para que nos traiga la información completa del usuario
    //Una vez nos llegue la información se establecerán en "setUser"
    const login = async (userCredentials) => {
        try {
            await axios.post("auth/login", userCredentials);
            setUser(userCredentials);
        } catch (error) {
            console.log(error);
        }
    };

    const register = async (userCredentials) => {
        try {
            await axios.post("auth/register", userCredentials);
            setUser(userCredentials);
        } catch (error) {
            console.log(error);
        }
    };


    const logout = () => {
        setUser(null);
        localStorage.setItem('avatar', null);
    }

    //Información que se quiere transmitir a los componentes hijos
    //Todo debería estar memorizado
    //El usuario será leído en App para saber si existe o no un usuario en session
    const contextValue = {
        user,
        login,
        register,
        logout
    };

    //El contextValue es el valor enviado a los hijos (children)
    //En este caso, contextValue tiene un objeto llamado "user"
    //Se crea el AuthContext y PROVEE el valor contextValue
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}