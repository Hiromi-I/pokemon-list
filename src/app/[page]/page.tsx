import PagingButton from "../components/PagingButton";
import MonsterCard from "../components/MonsterCard";
import { getPokemonsData, getPreviousPage, getNextPage } from "@/app/utils/poke-api";

type Params = {
    params: {
        page: string,
    },
};


export default async function Page( { params }: Params) {
    const currentPage = parseInt(params.page);
    const { results } = await getPokemonsData(currentPage);

    return (
      <>
          <ul className="grid grid-cols-5 gap-4 mb-12">
              {results.map(result => {
                return <MonsterCard key={result.name} url={result.url} />
              })}
          </ul>
          <div className="flex gap-4 w-52 mx-auto mb-12">
              <PagingButton page={getPreviousPage(currentPage)}>previous</PagingButton>
              <PagingButton page={getNextPage(currentPage)}>next</PagingButton>
          </div>
      </>
    )
  }
