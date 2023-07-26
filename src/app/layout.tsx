import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Pokemon Book",
  description: "Poke APIを利用したポケモンデータ図鑑",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="bg-gradient-to-r from-cyan-200 to-blue-300">
      <body className={inter.className}>
        <header className="bg-gradient-to-r from-gray-700 to-gray-500 mb-12">
          <h1 className="container mx-auto py-3">
            <Image width="852" height="124" alt="Pokemon Book" src="/logo.png" priority className='w-[350px]' />
          </h1>
        </header>
        <main className="container mx-auto">{children}</main>
        <footer className="bg-black">
          <p className="text-center text-white py-2">&copy; Pokemon Book</p>
        </footer>
      </body>
    </html>
  )
}
