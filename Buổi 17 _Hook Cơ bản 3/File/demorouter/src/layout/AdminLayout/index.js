import { useNavigate } from "react-router-dom"

const AdminLayout = () => {
    const navigate = useNavigate()
    const handleLogout = () =>{
        sessionStorage.removeItem("isLogined")
        navigate("/login")
    }
    return (
        <>
            <div>AdminLayout</div>
            <button onClick={handleLogout}>Logout</button>
        </>
        
    )
}
export default AdminLayout
