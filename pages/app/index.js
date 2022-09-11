import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>YUIN TEI - App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center p-10">
        <h1 className="p-10 text-4xl font-bold ">App</h1>

        <Link href="/app/cat">
          <a className=" underline">Cat Generator</a>
        </Link>
      </main>
    </div>
  );
}
