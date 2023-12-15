import Link from "next/link";
import { SearchParams } from "../lib/utils";
import { css } from "@/styled-system/css";

const ThemeToggleButton = ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const toggleButton = css({
    display: "flex",
    width: "40%",
    height: "40%",
    margin: "auto",
    borderRadius: "0.2rem",
    border: "2px solid var(--theme-color)",
    boxShadow: "2px 2px 0px 0px var(--theme-color)",
    "& div": {
      height: "calc(100% - 10px)",
      aspectRatio: "1/1",
      bg: "var(--theme-color)",
      margin:
        searchParams["theme"] === "dark"
          ? "auto 5px auto auto "
          : "auto auto auto 5px",
      borderRadius: "0.2rem",
    },
    _active: {
      transform: "scale(0.9)",
    },
  });

  return (
    <Link
      href={`?${searchParams["dir"] ? "&dir=" + searchParams["dir"] : ""}${
        searchParams["theme"] === "dark" ? "" : "&theme=" + "dark"
      }`}
      className={toggleButton}
    >
      <div></div>
    </Link>
  );
};

export default ThemeToggleButton;
