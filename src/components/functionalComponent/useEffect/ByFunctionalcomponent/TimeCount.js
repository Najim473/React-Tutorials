import { useEffect,useState } from "react";
import(useState)
export default function Time(){
    const [count , setCount] = useState(0);
    // const [text , setText] = useState(' ');
    const [date,setDate] = useState(new Date())
    const tick = ()=>{
        console.log(`Clock ticking`)
        setDate(new Date())
    }
    useEffect(()=>{
        console.log(`Updating document title`)
        document.title = `Clicked ${count} Times`
    },[count]);
    useEffect(()=>{
        console.log(`Starting timer`)
       const interval = setInterval(tick,1000)           
           return () =>{ 
            console.log('component unmounted')
            clearInterval(interval)
           }
    },[]);
    const addClick = ()=>{
        setCount((prevState)=>prevState+1)}
    return(
        <div>
      <p>Time: {date.toLocaleTimeString()} </p>
      {/* <input type="text" value={text} onChange={(e)=>setText(e.target.value)} /> */}
      <p>
          <button type='button' onClick={addClick}>Start Time</button>
      </p>
        </div>
    )
}

// tick=()=>{
//     this.setState({
//         date:new Date(),
//     })
// }