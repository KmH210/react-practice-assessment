import { Results, StarWars } from '../model/Starwars';

export function fetchAll(): Promise<StarWars> {
    return fetch(`https://swapi.dev/api/starships/`)
        .then((res)=> res.json());
}

export function fetchStarWars(): Promise<Results[]> {
    return fetch(`https://swapi.dev/api/starships/`)
    .then((res)=> res.json())
    .then((data:StarWars)=> {
        return data.results
    });
}