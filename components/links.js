import { SiTwitter, SiGithub } from "react-icons/si";

export const links = [
  { name: "Twitter", logo: <SiTwitter />, url: "https://twitter.com/yuintei" },
  { name: "GitHub", logo: <SiGithub />, url: "https://github.com/yuintei" },
];

export default function Links() {
  return (
    <div className="flex flex-col items-center mt-3 mb-5 px-5 py-3 w-max rounded-lg border border-slate-300 dark:border-slate-700">
      {links.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="blank"
          className="flex m-1 underline cursor-pointer items-center space-x-2 w-max"
        >
          <div>{item.logo}</div>
          <div>{item.name}</div>
        </a>
      ))}
    </div>
  );
}
