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
  SiNodedotjs,
  SiVercel,
  SiDocker,
  SiFigma,
} from "react-icons/si";

const techstack = [
  { name: "Javascript", logo: <SiJavascript /> },
  { name: "Typescript", logo: <SiTypescript /> },
  { name: "Node.js", logo: <SiNodedotjs /> },
  { name: "React", logo: <SiReact /> },
  { name: "Next.js", logo: <SiNextdotjs /> },
  { name: "Vercel", logo: <SiVercel /> },
  { name: "Docker", logo: <SiDocker /> },
  { name: "HTML", logo: <SiHtml5 /> },
  { name: "CSS", logo: <SiCss3 /> },
  { name: "TailwindCSS", logo: <SiTailwindcss /> },
  { name: "Figma", logo: <SiFigma /> },
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

      <main className="flex flex-col w-full items-center p-3">
        <h1 className="m-3 p-3 text-center text-4xl font-bold text-slate-800 dark:text-slate-200">
          Yuin Tei
        </h1>

        <div className="flex flex-col justify-center m-3 py-3 px-5 w-max rounded-lg  bg-slate-200 dark:bg-slate-800">
          {social.map((item) => (
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

        <div className="flex flex-wrap justify-center m-3 p-3 w-full max-w-md rounded-lg bg-slate-200 dark:bg-slate-800 ">
          {techstack.map((item) => (
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
