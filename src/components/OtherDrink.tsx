import React from "react";
import './OtherDrink.css';
import { useParams } from 'react-router-dom';

function OtherDrink() {
    interface RouteParams {
        drink: string
    }
    const { drink } = useParams<RouteParams>();
    return(
        <div className="other-drink">
            <h3>{drink}</h3>
        </div>
    )
}
export default OtherDrink;