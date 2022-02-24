import React from 'react'
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from './contexts/themeContext';
import {useContext} from 'react'
// Functional Components 
export default function Content (){
    const context = useContext(ThemeContext)
    const {theme,switchTheme}=context;
    console.log('Content render')
    return(
<div>
<h1>This is Content</h1>
<Counter>
    {(counter,incrementCount)=>(       
        <HoverCounter count ={counter} 
            incrementCount={incrementCount} 
            theme={theme}
            switchTheme ={switchTheme}
            />)}           
</Counter>
</div>
    );
}

// Class Component 

// export default class Content extends React.Component{
//     componentDidMount(){
//         console.log(this.context);
//     }
//     render(){
//         const {theme,switchTheme} = this.context;
//         return(
//             <div>
//             <h1>This is Content</h1>
//             <Counter>
//                 {(counter,incrementCount)=>(
              
//                     <HoverCounter count ={counter} 
//                         incrementCount={incrementCount} 
//                         // theme={{theme:'dark'}}  // When you are not using const (theme,switchTheme)
//                         // switchTheme ={()=>{}}   // use this format
//                         theme={theme}
//                         switchTheme ={switchTheme}
//                         />)}                                         
//             </Counter>
//             </div>
//                 );
//     }
// }

// Content.contextType = ThemeContext;

