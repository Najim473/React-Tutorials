// import React from 'react';
import withCounter from './WithCounter';
import './HoverCount.css'
 const HoverCounter = (props) =>{
const {count,incrementCount} =props;
return (
<div>
    <button className='HoverBtn' type='button' onMouseOver={incrementCount}>Hovered {count} times</button>
</div>
);
 }
export default withCounter(HoverCounter);