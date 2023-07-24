type Props = {
  title: string,
};

const MonsterDataLabel = (props: Props) => {
  return (
    <span className="text-white text-xs bg-gradient-to-b from-gray-600 to-gray-800 inline-block rounded w-[50px] p-1 mr-1">{props.title}</span>
  );
};

export default MonsterDataLabel;