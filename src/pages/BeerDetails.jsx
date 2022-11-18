import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function BeerDetails() {
    const {id} = useParams();

    const [beerDetails, setBeerDetails] = useState();
    const getBeer = async setter => {
            try {
            const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            const parsed = await response.json()
            setter(parsed)
        } catch (error) {
            console.log(error)
        }}

    useEffect(()=> {
        getBeer(setBeerDetails)
    }, [])
    return beerDetails ? ( 
        <>
        <Navbar/>
        <div style={{textAlign:"center"}}>
        <h1>{beerDetails.name}'s Details:</h1>
        <img src={beerDetails.image_url} alt={beerDetails.name} style={{height: "35vh"}} />
        <div className="details" >
            <div className="leftColumn">
                <h3>{beerDetails.name}</h3>
                <h3 className="silverText">{beerDetails.tagline}</h3>
            </div>
            <div className="rightColumn">
                <h3 className="silverText">{beerDetails.attenuation_level}</h3>
                <h3>{beerDetails.first_brewed}</h3>
            </div>
        </div>
        <div className="description">
        <p>{beerDetails.description}</p>
        <p className="silverText">{beerDetails.contributed_by}</p>
        </div>
        
        </div>
        </>
     ) : (<h1>Loading...</h1>);
}

export default BeerDetails;