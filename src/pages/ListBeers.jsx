import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


function ListBeers() {
    const [beersArr, setBeersArr] = useState([])
    const [filteredBeers, setFilteredBeers] = useState("")
    

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
    const handleSearchInput = (event) => {
        setFilteredBeers(event.target.value);
    };


    return (
        <>
            <Navbar/>
            <div>
                <input
                value={filteredBeers}
                placeholder="Search for a particular beer"
                type="text"
                onChange={handleSearchInput}
                className="searchBar"
                />
            {beersArr.length===0 ? (
                <h1>Oops! No beers to show! Maybe you should put some on the freezer!</h1>
            ) : (
                beersArr.filter((beer) => {
                    const lowerFilter = filteredBeers.toLowerCase();
                    return beer.name.toLowerCase().includes(lowerFilter);
                })
                .map(({_id, image_url, name, tagline, contributed_by})=> (
                    <div key={_id} className="oneBeer">
                        <img src={image_url} alt={name} style={{height:"25vh"}}/>
                        <div className="oneBeerText">
                        <h2>{name}</h2>
                        <p style={{color:"lightgray"}}><b>{tagline}</b></p>
                        <p><b>Created by: </b>{contributed_by}</p>
                        <Link to={`/beers/${_id}`}>Details</Link>
                        </div>
                    </div>
                )))}
            </div>
        </>
     );
}

export default ListBeers;