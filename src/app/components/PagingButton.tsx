import type { ReactNode }  from "react";
import Link from "next/link";

type Props = {
  page: number | null,
  children: ReactNode
};

const PagingButton = (props: Props) => {
  if (props.page === null) {
    return <button>{props.children}</button>
  } else {
    return <Link href={`/${props.page}`}>{props.children}</Link>
  }
};

export default PagingButton;