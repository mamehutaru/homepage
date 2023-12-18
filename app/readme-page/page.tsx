import { SearchParams } from "@/app/lib/utils";
import { css } from "@/styled-system/css";
import { Zen_Kaku_Gothic_Antique } from "next/font/google";
import Link from "next/link";
const zen = Zen_Kaku_Gothic_Antique({
  weight: "500",
  style: "normal",
  subsets: ["latin-ext"],
});

const zenBold = Zen_Kaku_Gothic_Antique({
  weight: "900",
  style: "normal",
  subsets: ["latin-ext"],
});

const sec = css({
  marginBottom: "1rem",
});

const backButton = css({
  //display: "block",
  fontSize: "2rem",
  fontStyle: "italic",
  position: "fixed",
  bottom: "1.5rem",
  right: "1.5rem",
  color: "#e8579a",
  zIndex: "3",
});

const page = ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <main
      style={{ padding: "2rem", height: "100vh" }}
      className={zen.className}
    >
      <section className={sec}>
        <p>Q. 冥界ってなんですか？</p>
        <p>A. まめふたるの個人サイトです．</p>
      </section>
      <section className={sec}>
        <p>Q. 新しいフォルダ（？）を追加するときはどうするのですか？</p>
        <p>
          A.
          フォルダツリーの構造はJSONで管理しています，フォルダを編集する場合はJSONをイジります．
        </p>
      </section>
      <section className={sec}>
        <p>Q. ドメインちゃんと維持できるんですか？</p>
        <p>A. しね．</p>
      </section>
      <section className={sec}>
        <p>Q. デザインがダサいです．</p>
        <p>A. おまえから殺す．</p>
      </section>
      <Link
        href={`/`}
        className={`${zenBold.className} ${backButton}`}
        style={{ fontStyle: "italic" }}
      >
        冥界
      </Link>
    </main>
  );
};

export default page;
