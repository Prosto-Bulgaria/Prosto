import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../../contexts/AuthContext";
import { useEffect } from "react";
import * as authService from "../../../services/authService"

const Logout = () => {
    const navigate = useNavigate();
    const {user, logout} = useAuthContext();

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                navigate('/');
            })
        }, [])
        
    return null
};

export default Logout;