import useWindowWidth from './useWindowWidth';
function LayoutComponentThree(){
  const onSmallScreen = useWindowWidth(780);
    return(
        <div className={onSmallScreen ? 'small' :'large'}>
            <h1 style={{color:'blue'}} >This is another components</h1>
        </div>
    )
}   
export default LayoutComponentThree; 