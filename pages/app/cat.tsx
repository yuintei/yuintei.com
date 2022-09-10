import { useState } from "react";
import type { NextPage, GetServerSideProps } from "next";
import Image from "next/future/image";

interface CatCategory {
  id: number;
  name: string;
}

interface SearchCatImage {
  breeds: string[];
  categories: CatCategory[];
  id: string;
  url: string;
  width: number;
  height: number;
}

type SearchCatImageResponse = SearchCatImage[];

const fetchCatImage = async (): Promise<SearchCatImage> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const result = (await res.json()) as SearchCatImageResponse;
  return result[0];
};

interface IndexPageProps {
  initialCatImageUrl: string;
}

const IndexPage: NextPage<IndexPageProps> = ({ initialCatImageUrl }) => {
  const [catImageUrl, setCatImageUrl] = useState(initialCatImageUrl);

  const handleClick = async () => {
    const image = await fetchCatImage();
    setCatImageUrl(image.url);
  };

  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center p-10 text-center">
      <h1 className="p-10 text-4xl font-bold">Random Cat Generator</h1>
      <button
        onClick={handleClick}
        className=" px-4 py-2 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-100"
      >
        押してね
      </button>

      <div className=" mt-8 w-full max-w-sm">
        <Image
          src={catImageUrl}
          alt="cat"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<
  IndexPageProps
> = async () => {
  const catImage = await fetchCatImage();
  return {
    props: {
      initialCatImageUrl: catImage.url,
    },
  };
};

export default IndexPage;
