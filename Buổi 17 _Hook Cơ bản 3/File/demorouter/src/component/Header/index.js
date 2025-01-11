import { Link } from "react-router-dom"
import "./style.css"
import ConOfHeader from "./conOfHeader"
const Header = () => {

    return (
        <ul className="menu">
            <li>Header (Test Active: Chuyển Link - NavLink)</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/setting">Setting</Link></li>
            <ConOfHeader/>
        </ul>
    )
}
export default Header
