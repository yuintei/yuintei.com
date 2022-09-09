import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        <title>YUIN TEI - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen w-full flex-1 flex-col items-center justify-center py-2 px-20 text-center">
        <h1 className="text-6xl text-blue-600 font-bold">About</h1>
      </main>
    </div>
  );
}
