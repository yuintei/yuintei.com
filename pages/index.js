import Head from "next/head";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>YUIN TEI - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center  p-20 text-center">
        <h1 className="p-10 text-6xl font-bold text-slate-800 dark:text-slate-200">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          Content
        </div>
      </main>
    </div>
  );
}
