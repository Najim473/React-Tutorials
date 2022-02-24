import { useState } from "react";

function Todo(){ 
    const [todo,setTodo] = useState({
        title:'',
        description:''
    });

    // const [warning,setWarning] = useState(null);
//    function handleInput(e){
//        let inputValue = e.target.value;
//        let updateWarning = inputValue.includes('React.js') ? 'Before learn React you should learn Javascript':null;
//        setTodo(inputValue)       
//        setWarning(updateWarning)
//    }
const {title,description} = todo;
    return(
        <div>
     <p>{title}</p>
     <p>
         <input type="text" value={title} onChange ={(e)=>setTodo({
             ...todo,
             title:e.target.value,

         })} />
     </p>
     <p>
        <textarea  value={description}  onChange ={(e)=>setTodo({
             ...todo,
             description:e.target.value,

         })}/>
     </p>
     {/* <h2>{warning || "GOOD CHOICE"}</h2> */}
        </div>
    )
}
export default Todo;