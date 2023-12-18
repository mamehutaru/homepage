import Link from "next/link";
import { css } from "@/styled-system/css";
import { SearchParams } from "@/app/lib/utils";

const navBar = css({
  position: "sticky",
  width: "100%",
  top: "0",
  display: "flex",
  borderTop: "2px  solid var(--theme-color) ",
  borderBottom: "2px solid var(--theme-color) ",
  overflowX: "auto",
  zIndex: "1",
  bg: "var(--bg-color)",
});

const navLink = css({
  margin: "1rem 1.5rem",
});

const linkText = css({
  textAlign: "center",
  whiteSpace: "nowrap",
});

//""を渡された場合は{nmae: "", path: ""}を返す．
const createLinkSet = (path: string) => {
  const splitedNames = path.split("_").filter(Boolean);

  const linkNames = splitedNames.map((str) => `_${str}`);

  const paths: string[] = [];

  //reduce初めて使ったけど便利すぎて感動
  linkNames.reduce((acc, current) => {
    const path = `${acc}${current}`;
    paths.push(path);
    return path;
  }, "");

  const linkSet: { name: string; path: string }[] = linkNames.map(
    (name, index) => ({
      name,
      path: paths[index],
    })
  );

  return linkSet;
};

const NavTest = ({ searchParams }: { searchParams: SearchParams }) => {
  const currentPath = searchParams["dir"] || "";

  const linkSet = createLinkSet(currentPath);

  return (
    <div className={navBar}>
      <Link
        href={`?${
          searchParams["theme"] ? "&theme=" + searchParams["theme"] : ""
        }`}
        className={navLink}
        scroll={false}
      >
        _Storage
      </Link>
      {linkSet.map(({ name, path }) => {
        return (
          <Link
            href={`?${path ? "&dir=" + path : ""}${
              searchParams["theme"] ? "&theme=" + searchParams["theme"] : ""
            }`}
            className={navLink}
            scroll={false}
          >
            <span className={linkText}>{name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default NavTest;
