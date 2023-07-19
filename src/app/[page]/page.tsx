import { Suspense } from "react";

import { getPokemonsData } from "@/app/utils/poke-api";

type Params = {
    params: {
        page: number,
    },
};


export default async function Page( { params }: Params) {
    const responseData = await getPokemonsData(params.page);

    return (
        <main>
            <h1>Pokemon</h1>
            <Suspense fallback={<p>Loading...</p>}>
            {res.results.map((d) => {
                return (<div>{d.name}: {d.url}</div>)
            })}
            </Suspense>
        </main>
    )
}
