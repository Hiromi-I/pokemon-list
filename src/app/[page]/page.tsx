import { Suspense } from "react";

import PagingButton from "../components/PagingButton";
import { getPokemonsData, getPokemonDetailData, getPreviousPage, getNextPage } from "@/app/utils/poke-api";

type Params = {
    params: {
        page: string,
    },
};


export default async function Page( { params }: Params) {
    const currentPage = parseInt(params.page);
    const pageData = await getPokemonsData(currentPage);
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
        <div>
          <PagingButton page={getPreviousPage(currentPage)}>previous</PagingButton>
          <PagingButton page={getNextPage(currentPage)}>next</PagingButton>
        </div>
      </main>
    )
  }
