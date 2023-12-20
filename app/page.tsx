import FileSystemPanel from "@/app/_components/fileManager/FileSystemPanel";
import { SearchParams } from "@/app/lib/utils";
import TopPanel from "@/app/_components/topPanel";
import { css } from "@/styled-system/css";
import Link from "next/link";
import ThemeToggleButton from "./_components/themeToggleButton";

const responsivePanel = css({
  display: "grid",
  gridTemplateRows: "auto, auto",
  xl: { gridTemplateColumns: "100% 1fr", gridTemplateRows: "1fr" },
  "2xl": { gridTemplateColumns: "100vh, 1fr", gridTemplateRows: "1fr" },
});

const responsiveHide = css({
  display: ["none", "none", "none", "block", "block", "block"],
});

const page = ({ searchParams }: { searchParams: SearchParams }) => {
  const theme = css({
    "--bg-color": searchParams["theme"] === "dark" ? "#212121" : "white",
    "--theme-color":
      searchParams["theme"] === "dark" ? "#bbaad1" : "#e8579a" /*#7fffd4*/ /**/,
    "--moon-invert": searchParams["theme"] === "dark" ? "80%" : "30%",
    background: "var(--bg-color)",
    color: "var(--theme-color)",
    margin: "0px",
    //overflow: "hidden",
  });

  const backButton = css({
    //display: "block",
    fontSize: "2rem",
    fontStyle: "italic",
    position: "fixed",
    bottom: "1.5rem",
    right: "1.5rem",
    color: "var(--theme-color)",
    zIndex: "3",
    width: "4rem",
  });

  return (
    <main className={`${theme}`}>
      <TopPanel searchParams={searchParams} />
      <FileSystemPanel searchParams={searchParams} />
      <div className={` ${responsiveHide} ${backButton}`}>
        <Link href={`/`}>冥界</Link>
        <ThemeToggleButton searchParams={searchParams} />
      </div>
    </main>
  );
};

export default page;
