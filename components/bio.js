export const bios = [
  { time: "2021", title: "Waltz", sentense: "Founder and CEO" },
  {
    time: "2019",
    title: "Plug and Play Ventures",
    sentense: "Investing in B2B startups",
  },
  {
    time: "2017",
    title: "Goldman Sachs",
    sentense: "Fund product development",
  },
  { time: "2015", title: "Mitsubishi UFJ Trust", sentense: "Derivatives" },
  { time: "2011", title: "Keio Univ", sentense: "Economics" },
];

export default function Bio() {
  return (
    <div className="flex flex-col items-center mt-3 px-5 mb-5 w-full max-w-md">
      <ol className="relative border-l border-gray-300 dark:border-gray-700">
        {bios.map((item) => (
          <li className="mb-3 ml-5" key={item.name}>
            <div className="absolute w-2.5 h-2.5 rounded-full mt-0.5 -left-1.5 bg-gray-300 dark:bg-gray-700 "></div>
            <time className=" text-gray-400 dark:text-gray-500">
              {item.time}
            </time>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-400 dark:text-gray-500">{item.sentense}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
