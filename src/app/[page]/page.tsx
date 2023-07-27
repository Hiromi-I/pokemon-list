import { notFound } from "next/navigation";

import PagingButton from "@/app/components/PagingButton";
import MonsterCard from "@/app/components/MonsterCard";
import { getPokemonsData, getPreviousPage, getNextPage } from "@/app/utils/poke-api";
import styles from "./page.module.css"

type Params = {
    params: {
        page: string,
    },
};

export default async function Page({ params }: Params) {
    const currentPage = parseInt(params.page);
    if (currentPage < 1 || 65 < currentPage) notFound();
    const { results } = await getPokemonsData(currentPage);

    return (
        <>
            <ul className={styles.cardContainer}>
                {results.map((result, index) => {
                    return <MonsterCard key={result.url} index={index} url={result.url} />
                })}
            </ul>
            <div className="flex gap-4 w-52 mx-auto mb-12">
                <PagingButton page={getPreviousPage(currentPage)}>前のページ</PagingButton>
                <PagingButton page={getNextPage(currentPage)}>次のページ</PagingButton>
            </div>
        </>
    );
}
