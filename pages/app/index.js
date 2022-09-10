import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center py-2">
      <Head>
        <title>YUIN TEI - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center  p-10 text-center">
        <h1 className="p-10 text-6xl font-bold ">App</h1>

        <Link href="/app/cat">
          <a className=" underline">Cat Generator</a>
        </Link>
      </main>
    </div>
  );
}