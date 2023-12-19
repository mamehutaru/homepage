import Link from "next/link";
import FolderSvg from "@/public/folderSvg";
import { css } from "@/styled-system/css";
import { SearchParams, searchCurrentDirItems } from "@/app/lib/utils";
import folderData from "@/app/const/folderData";
import { Oswald } from "next/font/google";
const oswald = Oswald({
  weight: "700",
  style: "normal",
  subsets: ["latin-ext"],
});

const itemsContainer = css({
  margin: "10vw 15vw",
  display: "grid",
  gridTemplateColumns: [
    "1fr 1fr",
    "1fr 1fr",
    "1fr 1fr 1fr",
    "1fr 1fr 1fr 1fr",
    " 1fr 1fr 1fr 1fr",
  ],
  columnGap: "10vw",
  rowGap: "10vw",
  //bg: "#0f0",
});

const itemWrapper = css({
  _active: {
    transform: "scale(0.9)",
  },
});

const folderImg = css({
  width: "100%",
  height: "auto",

  filter: "drop-shadow(0.3rem 0.3rem 0px var(--theme-color))",
  fill: "var(--bg-color)",
  stroke: "var(--theme-color)",
  strokeWidth: "0.5px",
});

const filePanelWrapper = css({
  display: "flex",
  width: "100%",
  aspectRatio: "1 / 1",
});

const filePanel = css({
  display: "flex",
  width: "80%",
  aspectRatio: "1 / 1",
  margin: "auto",
  borderRadius: "0.5rem",
  bg: "var(--bg-color)",
  border: "0.15rem solid var(--theme-color)",
  boxShadow: "0.25rem 0.25rem 0px var(--theme-color)",
});

const coverText = css({
  display: "block",
  margin: "auto",
  fontSize: "2rem",
});

const itemName = css({
  textAlign: "center",
  display: "block",
});

const paramDelimiter = "&";

const ItemsContainer = ({ searchParams }: { searchParams: SearchParams }) => {
  const currentPath = searchParams["dir"] || ""; //dirクエリパラメータを受け取る．("_a_b_c")

  const currentDirItems = searchCurrentDirItems(currentPath, folderData);

  if (!currentDirItems) {
    return <p>空なんすけど</p>;
  }

  return (
    <div className={itemsContainer}>
      {currentDirItems.map((item) => {
        if (item.type === "folder") {
          return (
            <Link
              href={`?dir=${currentPath}_${item.name}${
                searchParams["theme"] ? "&theme=" + searchParams["theme"] : ""
              }`}
              className={itemWrapper}
              scroll={false}
            >
              <FolderSvg className={folderImg} />

              <span className={itemName}>{item.name}</span>
            </Link>
          );
        } else if (item.src) {
          //フォルダじゃなくてファイルだった場合
          return (
            <Link
              href={`${item.src}?${
                searchParams["theme"] ? "&theme=" + searchParams["theme"] : ""
              }`}
              className={itemWrapper}
              target={item.type === "url" ? "_blank" : "_self"}
            >
              <div className={filePanelWrapper}>
                <div className={filePanel}>
                  <span className={`${coverText} ${oswald.className}`}>
                    .{item.type}
                  </span>
                </div>
              </div>
              <span className={itemName}>{item.name}</span>
            </Link>
          );
        }
      })}
    </div>
  );
};

export default ItemsContainer;
