import {useEffect,useState} from 'react'
function GetPost(){
    const [loading,setLoading] =useState(true);
    const [error,setError] =useState('');
    const [post,setPost] =useState({});
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then((data) => {
      setLoading(false);
      setPost(data);
      setError('')
  })
  .catch(()=>{
    setLoading(false);
    setPost({});
    setError('There is a porblem');
  });
    },[])    
return(
    <div>
        {loading? 'Loading...' : post.title}
        {error || null}
    </div>
)
}
export default GetPost;