import React from 'react'; 
export default function HoverCounter ({count,incrementCount,theme,switchTheme}){     
    const style = theme === 'dark' ? {backgroundColor:'#F5F868', color:'#ffffff'} : null;
    console.log('Hover render')
    return (
        <div>
            <h1 type='button' onMouseOver={incrementCount} style={style}>Hovered {count} times</h1>
            <button type='button' onClick={switchTheme}>Change Color</button>
        </div>
        );        
    } 

 
