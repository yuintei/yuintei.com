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

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and its API.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
