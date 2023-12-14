import folderData from "@/app/const/folderData";
import FolderStructure from "@/app/lib/folderStructure";
import { SearchParams, searchCurrentDirItems } from "@/app/lib/utils";
import Nav from "./Nav";
import { css } from "@/styled-system/css";
import ItemsContainer from "./ItemsContainer";

const containerWrapper = css({
  width: "100vw",
  minHeight: "100vh",
});

const FileSystemBoard = ({ searchParams }: { searchParams: SearchParams }) => {
  const currentPath = searchParams["dir"] || ""; //dirクエリパラメータを受け取る．("_a_b_c")

  //Navを修正したら消す
  const dirNames = currentPath.split("_").filter(Boolean);

  return (
    <div className={containerWrapper}>
      <Nav dirNames={dirNames} />
      <ItemsContainer searchParams={searchParams} />
    </div>
  );
};

export default FileSystemBoard;
