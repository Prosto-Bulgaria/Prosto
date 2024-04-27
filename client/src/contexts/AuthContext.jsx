import {createContext, useContext} from 'react';
import useLocalStorageAuth from '../hooks/useLocalStorageAuth';

export const AuthContext = createContext();

const initialState ={
    _id:'',
    email:'',
    username:'',
    accessToken:''
}

export const AuthProvider = ({children}) => {

    const [user, setUser] = useLocalStorageAuth('user', initialState);

    const login = (authData) => {
        setUser(authData)
    };

    const logout = () => setUser(initialState);

    const isAuthenticated = Boolean(user.email);

    return(
        <AuthContext.Provider value={{user, login, logout, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuthContext = () => useContext(AuthContext);