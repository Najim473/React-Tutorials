import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reactDom from 'react-dom';
// import reportWebVitals from './reportWebVitals';
const useState =[];
let stateIndex = -1;
function useState(defaultValue){
    const index= ++ stateIndex;
    if(states[index]) return states[index];
    const setValue = (newValue)=>{
        states[index][0]=newValue;
        renderWithHooks();
    };
const returnArray = [defaultValue,setValue];
states[index]=returnArray;
return returnArray;
}
function App(){
    const [todo,setTodo]= useState('');
    const [warning,setWarning] = useState(null);
    const handleInput = (e) =>{
        inputValue = e.target.value;
        const updateWarning = inputValue.includes('.js') ? 'Do you know Javascript':null;
    }
    return (
        <div>
            <p>{todo}</p>
            <p>
                <textarea name='todo' value={todo} onChange={handleInput}/>
            </p>
            <hr/>
            <h2>{warning || 'Good Choice'}</h2>
        </div>
    )
}

function renderWithHooks(){
    reactDom.render(
        <App/>,
    document.getElementById('root')        
    )
}
renderWithHooks();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// Default 
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );