import Head from "next/head";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTwitter,
  SiGithub,
} from "react-icons/si";

const techstack = [
  { name: "HTML", logo: <SiHtml5 /> },
  { name: "CSS", logo: <SiCss3 /> },
  { name: "Javascript", logo: <SiJavascript /> },
  { name: "Typescript", logo: <SiTypescript /> },
  { name: "React", logo: <SiReact /> },
  { name: "Next.js", logo: <SiNextdotjs /> },
  { name: "TailwindCSS", logo: <SiTailwindcss /> },
];

const social = [
  { name: "Twitter", logo: <SiTwitter />, url: "https://twitter.com/yuintei" },
  { name: "GitHub", logo: <SiGithub />, url: "https://github.com/yuintei" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>YUIN TEI - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-1 flex-col w-full items-center p-10">
        <h1 className="p-5 text-center text-4xl font-bold text-slate-800 dark:text-slate-200">
          Yuin Tei
        </h1>
        <h2 className="p-3 text-center text-xl text-slate-800 dark:text-slate-200">
          Links
        </h2>
        <div className=" justify-center p-5 space-y-1">
          {social.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="blank"
              className="flex mx-auto text-sm underline cursor-pointer items-center space-x-2 py-1 px-3 w-max"
            >
              <div>{item.logo}</div>
              <div>{item.name}</div>
            </a>
          ))}
        </div>
        <h2 className="p-3 text-center text-xl text-slate-800 dark:text-slate-200">
          Tech
        </h2>
        <div className=" justify-center p-5 space-y-1">
          {techstack.map((item) => (
            <div
              key={item.name}
              className="flex mx-auto text-sm items-center space-x-2 rounded-full border py-1 px-3 w-max"
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
