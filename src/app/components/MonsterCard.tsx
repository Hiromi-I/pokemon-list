import Image from "next/image";

import { getPokemonDetailData } from "@/app/utils/poke-api";
import { Suspense } from "react";

type Props = {
  url: string,
};

const AsyncMonsterCard = async (props: Props) => {
  const { name, height, weight, sprites } = await getPokemonDetailData(props.url);

  return (
    <>
      <Image src={sprites.other["official-artwork"].front_default} alt={name} width={165} height={165} priority className="h-[165px] aspect-square my-2" />
      <h2 className="font-bold text-center mb-3 py-2 bg-black text-white">{name}</h2>
      <p className="px-2 mb-2">身長: {height}m</p>
      <p className="px-2 mb-2">体重: {weight}kg</p>
    </>
  );
};

const SkeltonCard = () => {
  return (
    <>
      <div className="h-[165px] aspect-square my-2"></div>
      <h2 className="font-bold text-center mb-3 py-2 bg-black text-white">Loading...</h2>
      <p className="px-2 mb-2">身長: -- m</p>
      <p className="px-2 mb-2">体重: -- kg</p>
    </>
  )
}

const MonsterCard = (props: Props) => {
  return (
    <li className="bg-gray-200 text-black rounded h-[298px]">
      <Suspense fallback={<SkeltonCard />}>
        <AsyncMonsterCard url={props.url} />
      </Suspense>
    </li>
  );
};

export default MonsterCard;