import { Link } from "react-router-dom";
import beers from "../assets/beers.png"
import newBeer from "../assets/new-beer.png"
import randomBeer from "../assets/random-beer.png"
function Home() {
    return ( 
        <>
        <Link to="/beers" style={{textDecoration: "none"}}>
            <img src={beers} alt="beers"/>
            <p>Check our listed beers, along with a few details about them!</p>
        </Link>
        <Link to ="/random" style={{textDecoration: "none"}}>
            <img src={randomBeer} alt="Random beer"/>
            <p>Click to check the details on one random beer!</p>
        </Link>
        <Link to ="/random" style={{textDecoration: "none"}}>
            <img src={newBeer} alt="Random beer"/>
            <p>Click here to submit your own beer!</p>
        </Link>
     </>
     );
}

export default Home;