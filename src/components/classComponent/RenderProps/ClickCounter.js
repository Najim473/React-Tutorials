import React from 'react'; 
export default function ClickCounter ({count,incrementCount}){  
   
    return (
        <div>
            <button type='button' onClick={incrementCount}>Clicked {count} times</button>
        </div>
        );    
} 

// CLASS COMPONENT START 

// export default class ClickCounter extends React.Component{  
//     render(){ 
//         const {count,incrementCount}=this.props;
//         return (
//             <div>
//                 <button type='button' onClick={incrementCount}>Clicked {count} times</button>
//             </div>
//             );   
//     }
//     } 
    