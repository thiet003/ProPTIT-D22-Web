import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function DemoUseRef() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
    // const [count, setCount] = useState(0) 
  useEffect(() => {
    count.current = count.current + 1;
    // setCount(count + 1)
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
      {/* <h1>Render Count: {count}</h1> */}
    </>
  );
}
export default DemoUseRef
