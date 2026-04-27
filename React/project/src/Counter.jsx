import React, { useState } from "react";

function Counter1(){
    const [count,setCount]=useState(0);
    return(
        <>
        <h1> React Lab Manual</h1>
        <h2>Counter:{count}</h2>
        <button className="Counter" onClick={()=>{setCount(count+1)}}>Increment</button>
        <button className="Counter" onClick={()=>{setCount(count-1)}}>Decrement</button>
        <button className="Counter" onClick={()=>setCount(0)}>Reset</button>
        </>
    );
}
export default Counter1;