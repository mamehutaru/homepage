import { SearchParams, searchCurrentDirItems } from "@/app/lib/utils";
import { css } from "@/styled-system/css";
import ItemsContainer from "./ItemsContainer";
import NavTest from "./Navtest";

const containerWrapper = css({
  display: "block",
  width: "100%",
  minHeight: "100vh",
  bg: "var(--bg-color)",
});

const FileSystemBoard = ({ searchParams }: { searchParams: SearchParams }) => {
  const currentPath = searchParams["dir"] || ""; //dirクエリパラメータを受け取る．("_a_b_c")

  //Navを修正したら消す
  const dirNames = currentPath.split("_").filter(Boolean);

  return (
    <div className={containerWrapper}>
      <NavTest searchParams={searchParams} />
      <div style={{ overflow: "hidden" }}>
        <ItemsContainer searchParams={searchParams} />
      </div>
    </div>
  );
};

export default FileSystemBoard;
