import Link from "next/link";
import FolderSvg from "@/public/folderSvg";
import { css } from "@/styled-system/css";
import AlbumSvg from "@/public/albumSvg";
import { SearchParams, searchCurrentDirItems } from "@/app/lib/utils";
import folderData from "@/app/const/folderData";

const itemsContainer = css({
  margin: "10vw 15vw",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
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
  width: "auto",
  height: "auto",

  filter: "drop-shadow(4px 4px 0px var(--theme-color))",
  fill: "var(--bg-color)",
  stroke: "var(--theme-color)",
  strokeWidth: "0.5px",
});

const filePanelWrapper = css({
  display: "flex",
  width: "100%",
  aspectRatio: "1 / 1",
  //bg: "#cfc",
});

const filePanel = css({
  display: "flex",
  width: "80%",
  aspectRatio: "1 / 1",
  margin: "auto",
  borderRadius: "0.5rem",
  bg: "var(--bg-color)",
  border: "2px solid var(--theme-color)",
  boxShadow: "4px 4px 0px var(--theme-color)",
});

const albumImg = css({
  width: "70%",
  height: "70%",
  margin: "auto",
  fill: "var(--theme-color)",
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
              scroll={false}
            >
              <div className={filePanelWrapper}>
                <div className={filePanel}>
                  <AlbumSvg className={albumImg} />
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
