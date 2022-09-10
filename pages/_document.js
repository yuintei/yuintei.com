import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body className="max-w-4xl px-5 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
