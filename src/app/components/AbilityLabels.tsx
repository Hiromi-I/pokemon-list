type Props = {
  abilities: string[],
};

const AbilityLabels = (props: Props) => {
  return (
    <>
      {props.abilities.map(ability => {
        return <span key={ability} className="inline-block text-xs text-blue-700 border-solid border-2 border-blue-500 rounded p-[2px] mr-[2px] mb-[2px]">{ability}</span>
      })}
    </>
  )
};

export default AbilityLabels;