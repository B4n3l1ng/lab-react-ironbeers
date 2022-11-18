// https://ih-beers-api2.herokuapp.com/beers

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


function ListBeers() {
    const [beersArr, setBeersArr] = useState([])

    const fetchBeers = async setter => {
        try {
            const response = await fetch("https://ih-beers-api2.herokuapp.com/beers")
            const parsed = await response.json()
            setter(parsed)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        fetchBeers(setBeersArr)
    }, [])


    return (
        <>
            <Navbar/>
            <div>
                {beersArr.map(({_id, image_url, name, tagline, contributed_by})=> (
                    <div key={_id} className="oneBeer">
                        <img src={image_url} alt={name} style={{height:"25vh"}}/>
                        <div className="oneBeerText">
                        <h2>{name}</h2>
                        <p style={{color:"lightgray"}}><b>{tagline}</b></p>
                        <p><b>Created by: </b>{contributed_by}</p>
                        <Link to={`/beers/${_id}`}>Details</Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
     );
}

export default ListBeers;