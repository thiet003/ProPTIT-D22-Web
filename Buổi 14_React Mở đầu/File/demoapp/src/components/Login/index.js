import { useState } from "react";
import ShowInfo from "../ShowInfo/ìndex";


function Login(){
    // const [data, setData] = useState({})
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const email = e.target[0].value;
    //     const pass = e.target[1].value;
    //     setData({email: email, password: pass})
    // }
    return(
        <>
            {/* <form onSubmit={handleSubmit}>
                <input type="text" placeholder="email"/>
                <input type="password"/>
                <button type="submit">Submit</button>
            </form>  */}

            {/* <ShowInfo email={data.email} pass={data.password}/> */}
            <ShowInfo email={"son123"} pass={"xinchao"} name={"son"}/>

        </>
    )
} 
export default Login