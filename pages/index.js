import Head from "next/head";
import Skills from "../components/skills";
import Links from "../components/links";
import Updates from "../components/updates";

export default function Home() {
  return (
    <div>
      <Head>
        <title>YUIN TEI - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col w-full items-center">
        <h1 className="text-2xl font-bold mt-5 text-slate-800 dark:text-slate-200">
          Yuin Tei
        </h1>
        <Links></Links>
        <h2 className="text-base font-bold">Skills</h2>
        <Skills></Skills>
        <h2 className="text-base font-bold">Update History</h2>
        <Updates></Updates>
      </div>
    </div>
  );
}
