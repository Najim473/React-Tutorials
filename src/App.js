import {Navigate, Routes, Route } from "react-router-dom";
import Home from "./components/ReactRouting/Home";
import About from "./components/ReactRouting/About";
import Service from "./components/ReactRouting/Service";
import Header from "./components/ReactRouting/Header";
import Post from "./components/ReactRouting/Post";
import Posts from "./components/ReactRouting/Posts";
export default function App() {
    return (      
        <div className="App">
             <Header/>
             <Routes>  
               <Route path="/" element={<Navigate to = 'home'/>} />
               <Route path="/home/*" element={<Home/>}>
               <Route path="world" element={<p>This is world</p>} />
               </Route>
               <Route path="/about" element={<About/>} />
               <Route path="/service" element={<Service/>} />                
               <Route path="/posts/" element={<Posts />} />
              <Route path="/posts/:postId" element={<Post />} />
            </Routes>    
              
                       </div>                    
    );
}