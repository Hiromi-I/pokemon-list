import { Suspense } from "react";

import { getPokemonsData, getPokemonDetailData } from "@/app/utils/poke-api";

type Params = {
    params: {
        page: number,
    },
};


export default async function Page( { params }: Params) {
    const pageData = await getPokemonsData(params.page);
    const { results } = pageData;
    const detailList = await Promise.all(results.map(result => getPokemonDetailData(result.url)));
  
    return (
      <main>
        <h1>Pokemon</h1>
        <Suspense fallback={<p>Loading...</p>}>
          {detailList.map((d) => {
            return (<div>{d.id}: {d.name}</div>)
          })}
        </Suspense>
      </main>
    )
  }
