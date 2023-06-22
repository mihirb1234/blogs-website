import { useState,useEffect} from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
//     const [blogs,setBlogs]=useState(null);
//  const handleDelete=(id)=>{
//         const newBlogs=blogs.filter(blog=>blog.id!==id);
//         setBlogs(newBlogs);
//     }//functons as props
    const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs')

    
    // []-->fire the function once only and not whenever we delete/update the data but only when we initially render
    return ( 
    <div className="Home">
        {error && <div>{error}</div>}
       {isPending && <div>Loading....</div>}
       {blogs && <BlogList blogs={blogs} title="all blogs!!!!" />}
       
    
    </div>  

     );
}
 
export default Home;