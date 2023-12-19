import { SearchParams, searchCurrentDirItems } from "@/app/lib/utils";
import { css } from "@/styled-system/css";
import ItemsContainer from "./ItemsContainer";
import NavTest from "./Navtest";

const containerWrapper = css({
  display: "block",
  width: "auto",
  minHeight: "100vh",
  bg: "var(--bg-color)",
});

const FileSystemBoard = ({ searchParams }: { searchParams: SearchParams }) => {
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
