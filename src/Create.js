import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Create = () => {
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const [author,setAuthor]=useState('mario');
    const [isPending,setIsPending]=useState(false);
    const history=useHistory(); 
    const handleSubmit=(e)=>{
        e.preventDefault();
        setIsPending(true);
        const blog={title,body,author};
        // console.log(blog);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers: {"Content-Type":"application/json"},//content type that is being sent-json data
            body:JSON.stringify(blog)
        }).then(()=>{
            setIsPending(false);
            console.log('new blog added')
            // history.go(-1) goes one page back
            history.push('/');
        })
    }
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title: </label>
                <input 
                type="text"
                required
                value={title}
                onChange={e=>setTitle(e.target.value)}
                 />
                 <label>Blog Body: </label>
                 <textarea
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}>
                 </textarea>
                 <label>Blog Author: </label>
                 <select value={author}
                  onChange={e=>setAuthor(e.target.value)}
                  >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                   
                    
                 </select>
                 {isPending ? <button>Adding Blog..</button> : <button>Add Blog</button>} 
                 <p>{title}</p>
                 <p>{body}</p>
                 <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;