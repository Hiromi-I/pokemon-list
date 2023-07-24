export type MonsterData = {
  name: string,
  en_name: string,
  height: number,
  weight: number,
  types: string[],
  abilities: string[],
  sprites: {
    front_default: string,
    back_default: string,
    other: {
        "official-artwork": {
            front_default: string,
        },
    },
  },
};