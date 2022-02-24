import Content from './Content';
import React from 'react'
export default class Section extends React.Component {
    shouldComponentUpdate(){
        return false;
    }
render(){
    console.log('Section rendered');
    return (
        <div>
            <h1>This is Section</h1>
            <Content />
        </div>
            )
}
}




// function component 
// export default function Section(){
//     return (
// <div>
//     <h1>This is Section</h1>
//     <Content />
// </div>
//     )
// }