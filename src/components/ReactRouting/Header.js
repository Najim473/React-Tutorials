import { NavLink } from "react-router-dom";
import classes from './Header.module.css'
export default function Header(){
return (
    <div>
    <ul>
<li>
<NavLink to='/home' className={(navInfo)=>navInfo.isActive ? classes.active:''}> 
Home
</NavLink>
</li> 
<li>
<NavLink to='/about' className={(navInfo)=>navInfo.isActive ? classes.active:''}> 
About
</NavLink>
</li>    
<NavLink to="/posts" className={(navInfo) => (navInfo.isActive ? classes.active : "")}     >
            Posts
          </NavLink>
    </ul>
    </div>
)
}
