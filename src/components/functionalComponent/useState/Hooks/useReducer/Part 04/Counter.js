import { useReducer } from "react";
const initialState = 0;
const initialState2 = 10;

const reducer =(state,action) =>{
    switch(action){
        case 'increment':
            return state+1;
      case 'decrement':
          return state-1;
          default:
              return state;
    }
}
function Counter(){    
    const[count,dispatch] =  useReducer(reducer,initialState)
    const[count2,dispatch2] =  useReducer(reducer,initialState2)
    return (
      <div>
            <div>
            <div>Count  {count}</div>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('increment')}>Increment</button>
        </div>
        <hr />
        <div>
            <div>Count2  {count2}</div>
            <button onClick={()=>dispatch2('decrement')}>Decrement</button>
            <button onClick={()=>dispatch2('increment')}>Increment</button>
        </div>
      </div>
    )
}
export default Counter;