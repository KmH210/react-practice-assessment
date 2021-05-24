export interface StarWars {
    count:string;
    next: string;
    previous: null;
    results: Results[];
}

export interface Results {
    name: string;
    model: string;
    max_atmosphering_speed: number;
    starship_class: string;
}