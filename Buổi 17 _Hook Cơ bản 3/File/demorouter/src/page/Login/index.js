import { useNavigate } from "react-router-dom"

const Login = () => {

    const navigate = useNavigate()
    const handleLogin = () =>{
        sessionStorage.setItem("isLogined", true)
        navigate("/admin")
    }
    return (
        <button onClick={handleLogin}>Login</button>
    )
}
export default Login
