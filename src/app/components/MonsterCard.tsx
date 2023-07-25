import Image from "next/image";
import { Suspense } from "react";

import { getPokemonDetailData } from "@/app/utils/poke-api";
import TypeLabels from "@/app/components/TypeLabels";
import AbilityLabels from "@/app/components/AbilityLabels";
import MonsterDataLabel from "@/app/components/MonsterDataLabel";

type Props = {
  url: string,
};

const AsyncMonsterCard = async (props: Props) => {
  const { id, name, height, weight, sprites, types, abilities } = await getPokemonDetailData(props.url);

  return (
    <>
      <div className="h-[171px] w-full p-[3px] bg-gradient-to-b from-gray-200 to-gray-400 flex justify-center items-center">
      {sprites.other["official-artwork"].front_default ?
        <Image
          src={sprites.other["official-artwork"].front_default}
          alt={name}
          width={165}
          height={165}
          priority
        /> :
        <Image
          src="/monster404.png"
          alt="Not Found"
          width={165}
          height={165}
          priority
        />
      }
      </div>
      <div className="p-3">
        <h2 className="font-bold mb-3">[No.{id}] {name}</h2>
        <table>
          <tbody>
            <tr>
              <th><MonsterDataLabel title="高さ" /></th>
              <td>{height}m</td>
            </tr>
            <tr>
              <th><MonsterDataLabel title="重さ" /></th>
              <td>{weight}kg</td>
            </tr>
            <tr>
              <th className="align-top"><MonsterDataLabel title="タイプ" /></th>
              <td><TypeLabels types={types} /></td>
            </tr>
            <tr>
              <th className="align-top"><MonsterDataLabel title="特性" /></th>
              <td><AbilityLabels abilities={abilities} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

const SkeltonCard = () => {
  return (
    <>
      <div className="h-[171px] w-full mb-4 bg-gradient-to-b from-gray-200 to-gray-400 flex justify-center items-center">
        <Image src="/monster_ball.svg" alt="モンスターボール" width={70} height={70} priority className="animate-bounce" />
      </div>
      <div className="p-3">
        <h2 className="font-bold mb-3">[No.--] Loading...</h2>
        <table>
          <tbody>
            <tr>
              <th><MonsterDataLabel title="高さ" /></th>
              <td>--m</td>
            </tr>
            <tr>
              <th><MonsterDataLabel title="重さ" /></th>
              <td>--kg</td>
            </tr>
            <tr>
              <th className="align-top"><MonsterDataLabel title="タイプ" /></th>
              <td>--</td>
            </tr>
            <tr>
              <th className="align-top"><MonsterDataLabel title="特性" /></th>
              <td>--</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

const MonsterCard = (props: Props) => {
  return (
    <li className="bg-gray-100 text-black text-sm rounded-lg drop-shadow-md overflow-hidden">
      <Suspense fallback={<SkeltonCard />}>
        <AsyncMonsterCard url={props.url} />
      </Suspense>
    </li>
  );
};

export default MonsterCard;