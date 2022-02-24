import React, { useEffect,useRef } from 'react';
import './ForwardRef.css'
import Input from './Input';
function Form(){
    const inputRef = useRef(null);
    useEffect(()=>{
              console.log(inputRef.current)
              inputRef.current.focus();
    },[])
    return(
        <div>
            <p>
             <Input  ref={inputRef} type="text" placeholder="Enter Something 01"/>
            </p>
        </div>
    )
}
export default Form;