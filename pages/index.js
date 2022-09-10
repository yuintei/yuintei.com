import Head from "next/head";
import { Techstack } from "../components/techstack";
import { Social } from "../components/social";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>YUIN TEI - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full items-center">
        <h1 className="m-3 p-3 mb-10 text-center text-4xl font-bold text-slate-800 dark:text-slate-200">
          Yuin Tei
        </h1>
        <h2 className="font-bold">Links</h2>
        <div className="flex flex-col items-center m-3 mb-10 py-3 px-5 w-max rounded-lg  bg-slate-200 dark:bg-slate-800">
          {Social.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="blank"
              className="flex text-sm m-1 underline cursor-pointer items-center space-x-2 w-max"
            >
              <div>{item.logo}</div>
              <div>{item.name}</div>
            </a>
          ))}
        </div>

        <h2 className="font-bold">Skills</h2>

        <div className="flex flex-wrap justify-center m-3 mb-10 p-3 w-full max-w-md rounded-lg bg-slate-200 dark:bg-slate-800 ">
          {Techstack.map((item) => (
            <div
              key={item.name}
              className="flex text-xs items-center space-x-2 m-1 py-1 px-3 w-max rounded-full border border-slate-400 dark:border-slate-500"
            >
              <div>{item.logo}</div>
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
