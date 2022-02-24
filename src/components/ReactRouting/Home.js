import {Outlet } from "react-router-dom"
// import header from "./Header"
import './Home.css';
export default function Home(){
    return(
        <div>
            <h1>This is Home page</h1>     
            <p className="outletDesign">
        <Outlet/>
            </p>
      </div>

    )
}