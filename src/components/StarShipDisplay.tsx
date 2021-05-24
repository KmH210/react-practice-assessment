import { useEffect, useState } from "react";
import {  Results} from "../model/Starwars";
import { fetchStarWars } from "../service/starship-service";

function StarShips() {
    const [ships, setShips] = useState<Results[]>([]);
    useEffect(() => {
        fetchStarWars().then(data => {
            setShips(data);
        });
    },[ships]);

    return(
        <div className="StarShipDisplay">
            <h2>Star Ships</h2>
            <ul>
                {ships.map((ship, i)=> 
                <li key={i}>{ship.name} {ship.model} {ship.max_atmosphering_speed} {ship.starship_class}</li>)}
            </ul>
        </div>
    );
}

export default StarShips;