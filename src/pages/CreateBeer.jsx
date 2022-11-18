import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function CreateBeer() {
    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [firstBrewed, setFirstBrewed] = useState("")
    const [brewerTips, setBrewerTips] = useState("")
    const [attenuationLevel, setAttenuationLevel] = useState("")
    const [contributedBy, setContributedBy] = useState("")

    const handleSubmit = async event => {
        event.preventDefault()
        const response = await fetch("https://ih-beers-api2.herokuapp.com/beers/new", 
        {method: "POST",
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({name,
            tagline,
            description,
            first_brewed: firstBrewed,
            brewers_tips: brewerTips,
            attenuation_level:attenuationLevel,
            contributed_by: contributedBy
            }),
                })
        const parsed = await response.json()
        navigate("/beers")
    }

    return ( 
        <>
            <Navbar />
             <div>
                <h3>Add a new beer</h3>
               
                <form onSubmit={handleSubmit}  className="createBeer">
                    <label>
                    <p>Name:</p> <input type="text" value={name} onChange={event => setName(event.target.value)}/> 
                    </label>
                    <label>
                    <p>Tagline:</p> <input type="text" value={tagline} onChange={event => setTagline(event.target.value)}/> 
                    </label>
                    <label>
                    <p>Description:</p> <input type="text" value={description} onChange={event => setDescription(event.target.value)} style={{height:"10vh"}}/> 
                    </label>
                    <label>
                    <p>First brewed:</p> <input type="text" value={firstBrewed} onChange={event => setFirstBrewed(event.target.value)}/> 
                    </label>
                    <label>
                    <p>Brewer tips:</p> <input type="text" value={brewerTips} onChange={event => setBrewerTips(event.target.value)}/> 
                    </label>
                    <label>
                    <p>Attenuation level:</p> <input type="number" value={attenuationLevel} onChange={event => setAttenuationLevel(event.target.value)}/> 
                    </label>
                    <label>
                       <p>Contributed by:</p> <input type="text" value={contributedBy} onChange={event => setContributedBy(event.target.value)} /> 
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        </>
     );
}

export default CreateBeer;