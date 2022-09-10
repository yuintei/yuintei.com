export const updates = [
  {
    comment: "Next.jsのCustom Documentを設定しました",
    url: "/",
  },
  {
    comment: "ランダム猫画像ジェネレーターを公開しました",
    url: "/",
  },
  {
    comment: "TypeScriptを導入しました",
    url: "/",
  },
  {
    comment: "React Iconsでアイコンを導入しました",
    url: "/",
  },
  {
    comment: "Next.jsのCustom Appを設定しました",
    url: "/",
  },
  {
    comment: "HeadlessUIでレスポンシブなナビゲーションバーを設置しました",
    url: "/",
  },
  {
    comment: "TailwindCSSを導入しました",
    url: "/",
  },
  {
    comment: "next-themeでダークモードに対応しました",
    url: "/",
  },
  {
    comment: "Vercelにデプロイしカスタムドメインを設定しました",
    url: "/",
  },
  {
    comment: "create-next-appでウェブサイトを作成しました",
    url: "/",
  },
];

export default function Updates() {
  return (
    <div className="m-3 p-5 mb-10 text-xs w-full max-w-md">
      <ul className="flex flex-col list-disc">
        {updates.map((item) => (
          <li key={item.comment}>
            <div>
              {item.comment}{" "}
              <a
                href={item.url}
                target="blank"
                className="underline cursor-pointer"
              >
                Link
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
