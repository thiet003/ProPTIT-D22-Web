import "./style.css"
import { useContext } from "react"
import { AContext } from "../../layout/BlogLayout"
const ConOfHeader = () => {

    const demoContext = useContext(AContext)
    console.log(demoContext);
    
    return (
        <li>{demoContext.name}</li>
    )
}
export default ConOfHeader
