import {useEffect,useState} from 'react';
function LayoutComponentOne(){
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
        <div className=''>
            <h1>You are using {onSmallScreen ? 'small' :'large'} on  device</h1>
        </div>
    )
}
export default LayoutComponentOne; 