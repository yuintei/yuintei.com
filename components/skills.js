import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiVercel,
  SiDocker,
  SiFigma,
} from "react-icons/si";

export const skills = [
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

export default function Skills() {
  return (
    <div className="flex flex-wrap justify-center m-3 mb-10 p-3 w-full max-w-md rounded-lg bg-slate-200 dark:bg-slate-800 ">
      {skills.map((item) => (
        <div
          key={item.name}
          className="flex text-xs items-center space-x-2 m-1 py-1 px-3 w-max rounded-full border border-slate-400 dark:border-slate-500"
        >
          <div>{item.logo}</div>
          <div>{item.name}</div>
        </div>
      ))}
    </div>
  );
}
