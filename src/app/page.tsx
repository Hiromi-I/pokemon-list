import { Suspense } from "react";

import { getPokemonsData } from "@/app/utils/poke-api";


export default async function Home() {
  const responseData = await getPokemonsData(0);

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
