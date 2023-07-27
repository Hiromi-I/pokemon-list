type Props = {
    types: string[],
};

const TypeLabels = (props: Props) => {
    return (
        <>
            {props.types.map(type => {
                return <span key={type} className="inline-block text-xs text-gray-700 border-solid border-2 border-gray-500 rounded p-[2px] mr-[2px] mb-[2px]">{type}</span>
            })}
        </>
    );
};

export default TypeLabels;
