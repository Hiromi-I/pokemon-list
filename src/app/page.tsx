import Image from "next/image";
import Link from "next/link";

export default async function Home() {
    return (
        <section className="bg-white p-8 mb-12">
            <Image src="/hero.png" width={1500} height={800} alt="色々なポケモン" priority className="max-w-full h-auto mb-12" />
            <h1 className="text-3xl font-bold mb-4">Pokemon Bookへようこそ</h1>
            <p className="mb-12 leading-8">
                「Pokemon Book」は色々なポケモンの情報が見れる図鑑です。<br />
                全10,271種類のポケモンのデータを集めました。<br />
                名前に始まり、高さや重さ、種族タイプや特性までを完全網羅。<br />
                これを読めば、今日からあなたもポケモン博士に。
            </p>
            <div className="flex justify-center mb-12">
                <Link href="/1" className="flex justify-center items-center p-8 bg-red-600 hover:bg-red-400 text-white w-30 h-10 rounded-lg cursor-pointer">始める</Link>
            </div>
        </section>
    );
}
