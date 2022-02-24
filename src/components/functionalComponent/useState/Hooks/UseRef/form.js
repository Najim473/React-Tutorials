import React, { useEffect,useRef } from 'react';
import './Form.css'
function Form(){
    const inputRef = useRef(null);
    useEffect(()=>{
              console.log(inputRef.current)
              inputRef.current.focus();
    },[])
    return(
        <div>
            <p>
                <input ref={inputRef} type="text" className="inputForm" placeholder="Enter Something 01" />

            </p>
        </div>
    )
}
export default Form;