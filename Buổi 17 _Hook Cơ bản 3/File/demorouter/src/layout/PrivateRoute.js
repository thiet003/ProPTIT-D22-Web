import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const isLogin = sessionStorage.getItem("isLogined");

    if(!isLogin) return <Navigate to="/login" replace />
    return children
}
export default PrivateRoute
