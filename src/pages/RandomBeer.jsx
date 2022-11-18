import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState();
  const getRandom = async (setter) => {
    try {
      const response = await fetch(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      const parsed = await response.json();
      setter(parsed)
    } catch (error) {
        console.log(error)
    }
  };

  useEffect(() => {
    getRandom(setRandomBeer)
  }, [])
  
    return randomBeer ? ( 
        <>
        <Navbar/>
        <div style={{textAlign:"center"}}>
            <h1>{randomBeer.name}'s Details:</h1>
            <img src={randomBeer.image_url} alt={randomBeer.name} style={{height:"35vh"}}/>
            <div className="details">
                <div className="leftColumn">
                    <h3>{randomBeer.name}</h3>
                    <h3 className="silverText">{randomBeer.tagline}</h3>
                </div>
                <div className="rightColumn">
                    <h3 className="silverText">{randomBeer.attenuation_level}</h3>
                    <h3>{randomBeer.first_brewed}</h3>
                </div>
            </div>
            <div className="description">
                <p>{randomBeer.description}</p>
                <p className="silverText">{randomBeer.contributed_by}</p>
            </div>
        </div>
        </>
     ) : (<h1>Loading...</h1>);
}

export default RandomBeer;