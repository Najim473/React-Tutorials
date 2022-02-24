import React from 'react'
function Input({type,placeholder},ref){
    return<input className="inputForm" ref={ref} type={type} placeholder={placeholder}/>
}
const forwardedINput = React.forwardRef(Input);
export default forwardedINput;