import { useParams } from "react-router-dom"

const BlogDetail = () => {
    const param = useParams()
    console.log(param);
    
    return (
        <>BlogDetail: {param.id}</>
    )
}
export default BlogDetail
