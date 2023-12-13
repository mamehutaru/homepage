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
  //display: "block",
  //flex: "0 0 calc(50% - 20px)center" /* 50% 幅で 20px の間隔を空ける */,
  //backgroundColor: "#f00",
});

const folderImg = css({
  width: "auto",
  height: "auto",

  filter: "drop-shadow(4px 4px 0px #000)",
  fill: "#fff",
  stroke: "#000",
  strokeWidth: "0.5px",
  _active: {
    color: "#7fffd4",
    filter: "drop-shadow(0px 0px 0px #000)",
  },
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
  border: "2px solid #000",
  boxShadow: "4px 4px 0px #000",
  _active: {
    color: "#7fffd4",
    filter: "drop-shadow(0px 0px 0px #000)",
  },
});

const albumImg = css({
  width: "70%",
  height: "70%",
  margin: "auto",
  fill: "#000",
});

const itemName = css({
  textAlign: "center",
  display: "block",
  //bg: "cyan",
});

const Items = ({ dirItems, currentPath }: ItemsProps) => {
  if (dirItems.type === "folder") {
    return (
      <Link
        href={`/?dir=${currentPath}_${dirItems.name}`}
        className={itemsWrapper}
      >
        <FolderSvg className={folderImg} />

        <span className={itemName}>{dirItems.name}</span>
      </Link>
    );
  } else if (dirItems.src) {
    //フォルダじゃなくてファイルだった場合
    return (
      <Link href={dirItems.src} className={itemsWrapper}>
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
