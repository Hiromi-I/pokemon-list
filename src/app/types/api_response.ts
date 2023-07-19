export type Pokemon_Basic_Info = {
    name: string,
    url: string,
}

export type Pokemons_API_Response = {
    count: number,
    next: string | null,
    previous: string | null,
    results: Pokemon_Basic_Info[],
};

export type Pokemon_Detail_API_Response = {
    id: number,
    name: string,
    height: number,
    weight: number,
    sprites: {
        front_default: string,
        back_default: string,
    },
};