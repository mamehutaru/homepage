import TwitterSvg from "@/public/twitterSvg";
import { css } from "@/styled-system/css";
import ThemeToggleMoon from "./themeToggleButton";
import { SearchParams } from "../lib/utils";
import { Montserrat } from "next/font/google";

const montserratItalic = Montserrat({
  weight: "900",
  style: "italic",
  subsets: ["latin-ext"],
});

const topPanelWrapper = css({
  width: "100vw",
  aspectRatio: "4 / 3",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr 1fr",
  columnGap: "2px",
  rowGap: "2px",
  bg: "var(--theme-color)",
  "& div": {
    //bg: "var(--bg-color)",
  },
});

const mainImagePanel = css({
  gridRowStart: "1",
  gridRowEnd: "3",
  gridColumnStart: "1",
  gridColumnEnd: "1",
  bg: "var(--bg-color)",
  overflow: "hidden",
  "& span": {
    display: "block",
    fontStyle: "italic",
    fontSize: "30vw",
    whiteSpace: "nowrap",
    marginLeft: "-8vw",
    marginTop: "-12vw",
  },
});

const decorationPanel = css({
  display: "flex",
  bg: "var(--bg-color)",
  overflow: "hidden",
  "& div": {
    display: "block",
    margin: "auto",
    "& span": {
      display: "block",
      fontStyle: "italic",
      fontSize: "10vw",
      whiteSpace: "nowrap",
      color: "var(--bg-color)",
      textShadow: "2px 2px var(--theme-color)",
      transform: "scaleY(0.5)",
      margin: "-11vw",
    },
  },
});

const linkPanel = css({
  gridRowStart: "3",
  gridRowEnd: "3",
  display: "flex",
  backgroundImage: "radial-gradient(var(--theme-color) 1px, var(--bg-color) 0)",
  backgroundSize: "1rem 1rem",
  backgroundPosition: "center center",
});

const themeTogglePanel = css({
  display: "flex",
  gridRowStart: "2",
  gridRowEnd: "4",
  textAlign: "center",

  backgroundImage:
    "linear-gradient(0deg, transparent 1rem, var(--theme-color) calc(1rem + 1px)), linear-gradient(90deg, var(--bg-color) 1rem, var(--theme-color) calc(1rem + 1px))",
  backgroundSize: "calc(1rem + 1px) calc(1rem + 1px)",
  backgroundPosition: "center center",
});

const linkItem = css({
  display: "flex",
  aspectRatio: "1/1",
  height: "40%",
  border: "2px solid var(--theme-color)",
  boxShadow: "2px 2px 0px 0px var(--theme-color)",
  margin: "auto",
  borderRadius: "0.2rem",
  bg: "var(--bg-color)",
  _active: {
    transform: "scale(0.9)",
  },
});

const linkIcon = css({
  height: "70%",
  width: "70%",
  margin: "auto",
  fill: "var(--theme-color)",
});

const TopPanel = ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <div className={topPanelWrapper}>
      <div className={mainImagePanel}>
        <span>冥界</span>
      </div>

      <div className={decorationPanel}>
        <div className={montserratItalic.className}>
          <span>@LivLA</span>
          <span>@LivLA</span>
          <span>@LivLA</span>
        </div>
      </div>

      <div className={linkPanel}>
        <a
          target="_blank"
          href="https://twitter.com/TP_acid_s"
          rel="noopener noreferrer"
          className={linkItem}
        >
          <TwitterSvg className={linkIcon} />
        </a>
      </div>

      <div className={themeTogglePanel}>
        <ThemeToggleMoon searchParams={searchParams} />
      </div>
    </div>
  );
};

export default TopPanel;
