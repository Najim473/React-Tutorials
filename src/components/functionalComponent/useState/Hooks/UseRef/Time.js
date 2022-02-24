import { useEffect, useRef, useState } from "react"

export default function Time(){
 const [date,setDate] = useState(new Date());
 const btnRef = useRef()
 const tick = ()=>{
     setDate(new Date());
 };
 useEffect(()=>{
    btnRef.current= setInterval(tick,1000);
     return ()=>{
         clearInterval(btnRef.current)
     };
 },[])

    return (
<div>
    <p>Time: {date.toLocaleTimeString()}</p>
    <p>
        <button onClick={()=>clearInterval(btnRef.current)}>Clean Up</button>
    </p>
</div>
    )
}