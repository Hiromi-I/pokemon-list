import type { ReactNode } from "react";
import Link from "next/link";

type Props = {
    page: number | null,
    children: ReactNode
};

const PagingButton = (props: Props) => {
    const baseStyle = "flex justify-center items-center w-24 h-10 rounded-lg";
    if (props.page === null) {
        return (<button className={`${baseStyle} text-black bg-gray-300 cursor-auto`}>{props.children}</button>);
    } else {
        return (<Link className={`${baseStyle} text-white bg-red-600 hover:bg-red-400`} href={`/${props.page}`}>{props.children}</Link>);
    }
};

export default PagingButton;
