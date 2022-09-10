import Head from "next/head";
import Skills from "../components/skills";
import Links from "../components/links";
import Updates from "../components/updates";

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
        <Links></Links>
        <h2 className="font-bold">Skills</h2>
        <Skills></Skills>
        <h2 className="font-bold">Update History</h2>
        <Updates></Updates>
      </main>
    </div>
  );
}
