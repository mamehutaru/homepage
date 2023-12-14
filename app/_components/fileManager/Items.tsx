import FolderStructure from "@/app/lib/folderStructure";
import Link from "next/link";
import FolderSvg from "@/public/folderSvg";
import { css } from "@/styled-system/css";
import AlbumSvg from "@/public/albumSvg";

type ItemsProps = {
  dirItems: FolderStructure;
  currentPath: string;
};

const itemsWrapper = css({
  _hover: {
    color: "#3cbac0",
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
  bg: "#fff",
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

const Items = ({ dirItems, currentPath }: ItemsProps) => {
  if (dirItems.type === "folder") {
    return (
      <Link
        href={`/?dir=${currentPath}_${dirItems.name}`}
        className={itemsWrapper}
        scroll={false}
      >
        <FolderSvg className={folderImg} />

        <span className={itemName}>{dirItems.name}</span>
      </Link>
    );
  } else if (dirItems.src) {
    //フォルダじゃなくてファイルだった場合
    return (
      <Link href={dirItems.src} className={itemsWrapper} scroll={false}>
        <div className={filePanelWrapper}>
          <div className={filePanel}>
            <AlbumSvg className={albumImg} />
          </div>
        </div>
        <span className={itemName}>{dirItems.name}</span>
      </Link>
    );
  }
};

export default Items;
