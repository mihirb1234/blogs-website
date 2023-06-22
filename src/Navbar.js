const Link = require("react-router-dom").Link;
const BrowserRouter = require("react-router-dom").BrowserRouter;

const Route = require("react-router-dom").Route;

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The Dojo blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" >New Blog</Link>
            </div>
            
        </nav>
    );
}
 
export default Navbar ; 
// style={{
//     color: "white",
//     backgroundColor:'#f1356d',
//     borderRadius:'8px'
// }}