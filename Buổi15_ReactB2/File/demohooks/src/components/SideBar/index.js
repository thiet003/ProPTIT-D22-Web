import { useState } from "react";
import "./style.css"
function SideBar(){
    const [isClosed, setClose] = useState(false);
    
    const handleClick = () => {
        setClose(!isClosed)
    }
    return(
        <> 
            {
                isClosed ? (
                    <></>
                ) : (
                    <div className="container">
                        SideBar
                        <button className='btn' onClick={handleClick}>Close</button>
                    </div>
                )
            }   
            {
                !isClosed ? (
                    <></>
                ) : (
                    <button className='btn' onClick={handleClick}>Open</button>
                )
            } 
            
        </>
    )   
}
export default SideBar;