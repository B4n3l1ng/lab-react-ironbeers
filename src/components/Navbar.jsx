import { NavLink } from "react-router-dom";
import home from "../assets/home.png"
function Navbar() {
    return ( 
        <NavLink to= "/">
                <img src={home} alt="home link" style={{width:"100vw", height: "150px"}}/>            
        </NavLink>
     );
}

export default Navbar