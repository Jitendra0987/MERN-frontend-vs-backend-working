import { Link ,Outlet} from "react-router-dom";


const Layout=()=>{
    return(
        <>
        <Link to ="home" >Home</Link>
        <Link to ="insert" >Insert</Link>
        <Link to ="display" >Dispaly</Link>
        <hr size="4" color="yellow" />

        <Outlet></Outlet>


        www. my page .com

        </>
    )
}
export default Layout;