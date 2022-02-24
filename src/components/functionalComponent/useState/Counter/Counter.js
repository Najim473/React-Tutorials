import { useState } from "react";
function Counter(){
    const [count,setCount] = useState(0);
    let i=0;
    const addFive=()=>{
        while(i<5){
            setCount((preveState)=>preveState+1);
        i+=1;
        }
    }
    return (
        <div>
            {count}
            <p>
            <button type="button" onClick={()=>setCount((preveState)=>preveState+1)}>Add 01</button>
            </p>
            <p>
            <button type="button" onClick={addFive}>Add 01</button>
            </p>
        </div>
    )
}

export default Counter;