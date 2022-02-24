import {useEffect,useState} from 'react';
function LayoutComponentTwo(){
    const [onSmallScreen,setOnSmallScreen] =useState(false);
    const checkScreenSize =()=>{
        setOnSmallScreen(window.innerWidth<780)
        }
        useEffect(()=>{
            checkScreenSize();
            window.addEventListener('resize',checkScreenSize);
            return ()=>window.removeEventListener('resize',checkScreenSize)
        },[])
    return(
        <div className={onSmallScreen ? 'small' :'large'}>
            <h1>This is another components</h1>
        </div>
    )
}   
export default LayoutComponentTwo; 