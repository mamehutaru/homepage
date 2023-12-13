import Link from "next/link";
import { css } from "@/styled-system/css";

const navBar = css({
  position: "sticky",
  top: "0",
  display: "flex",
  borderTop: "2px  solid #000 ",
  borderBottom: "2px solid #000 ",
  overflowX: "auto",
  zIndex: "1",
  bg: "#7fffd4",
});

const navLink = css({
  //bg: "#ccf",
  margin: "1rem 1.5rem",
});

const linkText = css({
  textAlign: "center",
  whiteSpace: "nowrap",
  //bg: "#fff",
  // filter: "invert()",
});

const currentLinkText = css({
  textAlign: "center",
  whiteSpace: "nowrap",
  bg: "#0f0",
  borderRadius: "0.5rem",
});

type dirNamesProps = {
  dirNames: string[] | undefined;
};
type DirectoryData = {
  name: string;
  path: string;
};

//はじめてreduceを使った．["a", "b", "c"]を["_a", "_a_b", "_a_b_c"]に変換する関数
const generatePathNames = (dirNames: string[]) => {
  return dirNames.reduce((acc, current) => {
    acc.push(`${acc[acc.length - 1] || ""}_${current}`);
    return acc;
  }, [] as string[]);
};

const Nav = ({ dirNames }: dirNamesProps) => {
  if (!dirNames) {
    return (
      <div className={navBar}>
        <Link href="/" className={navLink}>
          <span className={linkText}>_Storage</span>
        </Link>
      </div>
    );
  }
  const pathNames = generatePathNames(dirNames);

  const directories: DirectoryData[] = dirNames.map((name, index) => ({
    //名前とパスを対応させたオブジェクトを作成
    name,
    path: pathNames[index],
  }));

  return (
    <div className={navBar}>
      <Link href="/" className={navLink}>
        _Storage
      </Link>
      {directories.map(({ name, path }) => {
        return (
          <Link href={`?dir=${path}`} className={navLink}>
            <span className={linkText}>_{name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
