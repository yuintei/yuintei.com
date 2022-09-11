import { links } from "./links";

export default function Footer() {
  return (
    <footer className="flex flex-col my-3 items-center text-center text-gray-500 dark:text-gray-400 ">
      <div className="flex mb-2">
        {links.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="blank"
            className="flex m-1 underline text-sm cursor-pointer items-center space-x-2 w-max"
          >
            <div>{item.logo}</div>
          </a>
        ))}
      </div>

      <div>© 2022 YUIN TEI</div>
    </footer>
  );
}
