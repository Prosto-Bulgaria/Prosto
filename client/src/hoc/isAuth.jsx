import { useAuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export const isAuth = (Component) => {

    const Wrapper = (props) => {
        const { isAuthenticated } = useAuthContext();
        
        return isAuthenticated
            ? <Navigate to="/"/>
            : <Component {...props}/>
    };

    return Wrapper;
};
