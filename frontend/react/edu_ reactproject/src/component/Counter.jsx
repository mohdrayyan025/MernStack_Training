import { useState } from "react";
export default function Counter(){
    const [count,setCount]=useState(0);
    function HandelIncr(){
        setCount(count+1);
    }
    function HandelDecr(){
        setCount(count-1);
    }
    const dount=0;
    function INC(){
        return dount+1;

    }
    return(
        <>
        <button onClick={HandelIncr}>INCREASE</button>
        <button onClick={HandelDecr}>DECREASE</button>
        <h1>COUNT : {count}</h1>
        <button onClick={INC}>OTHER</button>
        <h1>DOUNT : {dount}</h1>
        </>
    )
}