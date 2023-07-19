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
