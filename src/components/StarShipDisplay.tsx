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
            <ul>
                {ships.map((ship, i)=> 
                <li key={i}>Ship Name: {ship.name}, Ship Model: {ship.model}, Max Atmosphering Speed: {ship.max_atmosphering_speed}, Starship class: {ship.starship_class}</li>)}
            </ul>
        </div>
    );
}

export default StarShips;