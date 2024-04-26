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

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuthContext = () => useContext(AuthContext);