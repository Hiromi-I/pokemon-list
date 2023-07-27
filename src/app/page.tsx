import { Suspense } from "react";

import { getPokemonsData, getPokemonDetailData } from "@/app/utils/poke-api";


export default async function Home() {
    const pageData = await getPokemonsData(0);
    const { results } = pageData;
    const detailList = await Promise.all(results.map(result => getPokemonDetailData(result.url)));

    return (
        <main>
            <h1>Pokemon</h1>
            <Suspense fallback={<p>Loading...</p>}>
                {detailList.map((d) => {
                    return (<div key={d.id}>{d.id}: {d.name}</div>)
                })}
            </Suspense>
        </main>
    )
}
