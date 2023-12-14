import folderData from "@/app/const/folderData";
import FolderStructure from "@/app/lib/folderStructure";
import { SearchParams, searchCurrentDirItems } from "@/app/lib/utils";
import Link from "next/link";
import Items from "./Items";
import Nav from "./Nav";
import { css } from "@/styled-system/css";

const containerWrapper = css({
  width: "100vw",
  minHeight: "100vh",
});

const itemsContainer = css({
  margin: "10vw 15vw",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  columnGap: "10vw",
  rowGap: "10vw",
  //bg: "#0f0",
});

const FileSystemBoard = ({ searchParams }: { searchParams: SearchParams }) => {
  console.log(searchParams["mode"]);
  const currentPath = searchParams["dir"]; //クエリパラメータを受け取る．

  if (currentPath === undefined) {
    //つまりルートなら

    return (
      <div className={containerWrapper}>
        <Nav dirNames={[]} />

        <div className={itemsContainer}>
          {folderData.map((folder) => {
            return <Items dirItems={folder} currentPath={""} />;
          })}
        </div>
      </div>
    );
  } else {
    const dirNames = currentPath.split("_").filter(Boolean); //ディレクトリの親子構造を["親", "子", "孫"]のように変換

    const currentDirItems = searchCurrentDirItems(dirNames, folderData);

    return (
      <div className={containerWrapper}>
        <Nav dirNames={dirNames} />
        <div className={itemsContainer}>
          {currentDirItems ? ( //中身あるなら
            currentDirItems.map((items) => {
              return <Items dirItems={items} currentPath={currentPath} />;
            })
          ) : (
            <p>中身ないよ</p>
          )}
        </div>
      </div>
    );
  }
};

export default FileSystemBoard;
