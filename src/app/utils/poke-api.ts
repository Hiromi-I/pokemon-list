import axios from "axios";

import { Pokemons_API_Response, Pokemon_Detail_API_Response, Pokemon_Named_API_Response } from "../types/api_response";
import { MonsterData } from "@/app/types/monstar_data";

export const getPokemonsData = async (page: number) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${page * 20}&limit=20`;
    const response = await axios.get<Pokemons_API_Response>(url);
    return response.data;
};

export const getPokemonDetailData = async (url: string) => {
    const response = await axios.get<Pokemon_Detail_API_Response>(url);
    return {
        id: response.data.id,
        name: await getJapaneseName(response.data.species.url),
        height: response.data.height / 10,
        weight: response.data.weight / 10,
        types: await getJapaneseNames(response.data.types.map(type => type.type.url)),
        abilities: await getJapaneseNames(response.data.abilities.map(ability => ability.ability.url)),
        sprites: response.data.sprites,
    } as MonsterData;
}

export const getJapaneseName = async (url: string) => {
    const response = await axios.get<Pokemon_Named_API_Response>(url);
    return response.data.names.find(name => name.language.name === "ja")!.name;
}

export const getJapaneseNames = async (urls: string[]) => {
    return await Promise.all(urls.map(url => getJapaneseName(url)));
}

export const getPreviousPage = (page: number) => {
    if (page - 1 <= 0) return null;
    return page - 1;
}

export const getNextPage = (page: number) => {
    if (page + 1 > 64) return null; // 最終64ページ
    return page + 1;
}