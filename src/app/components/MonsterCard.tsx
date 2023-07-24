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
      <div className="h-[171px] w-full p-[3px] mb-4  bg-gradient-to-b from-gray-200 to-gray-400 flex justify-center items-center">
        <Image src={sprites.other["official-artwork"].front_default} alt={name} width={165} height={165} priority className="h-[165px] w-[165px]" />
      </div>
    </>
  );
};

const SkeltonCard = () => {
  return (
    <>
      <div className="h-[171px] w-full mb-4 bg-gradient-to-b from-gray-200 to-gray-400 flex justify-center items-center">
        <Image src="/monster_ball.svg" alt="モンスターボール" width={70} height={70} priority className="h-[70px] w-[165px] animate-bounce" />
      </div>
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