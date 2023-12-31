export type Pokemon_Basic_Info = {
    name: string,
    url: string,
};

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
    species: {
        name: string,
        url: string,
    },
    sprites: {
        front_default: string,
        back_default: string,
        other: {
            "official-artwork": {
                front_default: string,
            },
        },
    },
    types: {
        type: {
            name: string,
            url: string,
        },
    }[],
    abilities: {
        ability: {
            name: string,
            url: string,
        },
    }[],
};

export type Pokemon_Named_API_Response = {
    names: {
        name: string,
        language: {
            name: string,
            url: string,
        },
    }[],
};
