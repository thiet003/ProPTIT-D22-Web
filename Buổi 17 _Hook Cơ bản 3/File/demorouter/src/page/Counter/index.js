import { useReducer } from "react"

function reducerFunction(state, action){
    if(action == "cong"){
        return state + 1
    }else if(action == "tru"){
        return state - 1
    }else if (action == "reset"){
        return 0
    }
    return state
}

const Counter = () => {
    const [cnt, dispatch_cnt] = useReducer(reducerFunction, 0)

    return (
        <>
            <ul> Counter: 
                <li><button onClick={() => dispatch_cnt("cong")}>+</button> :</li>
                <li><button onClick={() => dispatch_cnt("tru")}>-</button> :</li>
                <li><button onClick={() => dispatch_cnt("reset")}>Reset</button> :</li>
                <li>Cnt: {cnt}</li>
            </ul>   
        </>
    )
}
export default Counter
