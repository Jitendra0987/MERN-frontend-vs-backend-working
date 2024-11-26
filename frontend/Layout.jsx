import { Link, Outlet } from "react-router-dom";



const Layout=()=>{
    return(
        <>

        <Link to="home">Home</Link>|
        <Link to="display">Display</Link>|
        <Link to="insert">Insert</Link>|
        <Link to="search">Search</Link>|
        <Link to="delete">Delete</Link>|
        <hr size="4" color="red"/>

        <Outlet/>
          
          <br/>

        www.footer.com

        </>
    )
}
 export default Layout;