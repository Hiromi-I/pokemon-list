import axios from "axios";

import { Pokemons_API_Response, Pokemon_Detail_API_Response } from "../types/api_response";

export const getPokemonsData = async (page: number) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${page * 20}&limit=20`;
    const response = await axios.get<Pokemons_API_Response>(url);
    return response.data;
};

export const getPokemonDetailData = async (url: string) => {
    const response = await axios.get<Pokemon_Detail_API_Response>(url);
    return response.data;
}

export const getPreviousPage = (page: number) => {
    if (page - 1 <= 0) return null;
    return page - 1;
}

export const getNextPage = (page: number) => {
    if (page + 1 > 64) return null; // 最終64ページ
    return page + 1;
}