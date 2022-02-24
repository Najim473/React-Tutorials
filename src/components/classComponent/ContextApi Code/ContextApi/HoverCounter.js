import React from 'react'; 
export default function HoverCounter ({count,incrementCount,theme}){     
    const style = theme === 'dark' ? {backgroundColor:'#F5F868', color:'#ffffff'} : null;
    return (
        <div>
            <h1 type='button' onMouseOver={incrementCount} style={style}>Hovered {count} times</h1>
        </div>
        );        
    } 

 
