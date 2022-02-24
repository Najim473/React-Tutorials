import React from 'react'; 
export default function HoverCounter ({count,incrementCount}){  
   
    return (
        <div>
            <button type='button' onMouseOver={incrementCount}>Clicked {count} times</button>
        </div>
        );   
 
} 


// CLASS COMPONENT START 

// export default class HoverCounter extends React.Component{  
//     render(){ 
//         const {count,incrementCount}=this.props;
//         return (
//             <div>
//                 <button type='button' onMouseOver={incrementCount}>Clicked {count} times</button>
//             </div>
//             );   
//     }
//     } 
