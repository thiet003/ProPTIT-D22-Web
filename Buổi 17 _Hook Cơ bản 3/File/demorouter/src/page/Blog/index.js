import { Link } from "react-router-dom"

const Blog = () => {
    return (
        <>
            <ul>Blog
                <li><Link to={"/blog/" + 1}>Blog 1</Link></li>
                <li><Link to={"/blog/" + 2}>Blog 2</Link></li>
                <li><Link to={"/blog/" + 3}>Blog 3</Link></li>
            </ul>
        </>
    )
}
export default Blog
