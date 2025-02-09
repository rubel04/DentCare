import { useContext } from "react";
import { AuthenticationContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,isLoading} = useContext(AuthenticationContext);
    if (isLoading) {
        return <p className="text-3xl font-bold text-center text-red-500 mt-12">Loading...</p>
    }
    if (user) {
        return children
    }
    return (
        <Navigate to='/login' state={location.pathname}></Navigate>
    );
};

export default PrivateRoute;