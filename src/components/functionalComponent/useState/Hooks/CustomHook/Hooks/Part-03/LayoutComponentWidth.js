import useWindowWidth from "./useWindowWidth";
function LayoutComponentOne(){
  const onSmallScreen = useWindowWidth(680);   
    return(
        <div className=''>
            <h1>You are using {onSmallScreen ? 'small' :'large'} on  device</h1>
        </div>
    )
}
export default LayoutComponentOne; 