import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);
//   VD1:
//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   });

    //VD2
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount((count) => count + 1);
    //     }, 1000);
    // }, []); // <- add empty brackets here
   
    
    //VD3
    const [calculation, setCalculation] = useState(0);
    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here
    return (
        <div>
            <h1>I've rendered {count} times!</h1>;
            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount((c) => c + 1)}>+</button>
                <p>Calculation: {calculation}</p>
            </div>
        </div>
        
    )
}

export default Timer