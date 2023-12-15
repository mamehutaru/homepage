import TwitterSvg from "@/public/twitterSvg";
import { css } from "@/styled-system/css";
import ThemeToggleButton from "./themeToggleButton";
import { SearchParams } from "../lib/utils";

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
});

const switchPanel = css({
  display: "flex",
  bg: "var(--bg-color)",
});

const linkPanel = css({
  gridRowStart: "3",
  gridRowEnd: "3",
  display: "flex",
  bg: "var(--bg-color)",
});

const titlePanel = css({
  display: "flex",
  gridRowStart: "2",
  gridRowEnd: "4",
  //bg: "var(--bg-color)",
  //bg: "var(--theme-color)",
  textAlign: "center",

  //backgroundColor: "var(--bg-color)",
  backgroundImage:
    "linear-gradient(0deg, transparent 1rem, var(--theme-color) calc(1rem + 1px)), linear-gradient(90deg, var(--bg-color) 1rem, var(--theme-color) calc(1rem + 1px))",
  backgroundSize: "calc(1rem + 1px) calc(1rem + 1px)",
  backgroundPosition: "center center",

  "& span": {
    display: "block",
    margin: "auto",
  },
});

const linkItem = css({
  display: "flex",
  aspectRatio: "1/1",
  height: "40%",
  border: "2px solid var(--theme-color)",
  boxShadow: "2px 2px 0px 0px var(--theme-color)",
  margin: "auto",
  borderRadius: "0.2rem",
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

const moon = css({
  height: "50%",
  margin: "auto",
  filter:
    " opacity(100%)  invert(var(--moon-invert)) drop-shadow(0px 0px 0px var(--theme-color))",
});

const TopPanel = ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <div className={topPanelWrapper}>
      <div className={mainImagePanel}>img</div>
      <div className={switchPanel}>
        <ThemeToggleButton searchParams={searchParams} />
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
      <div className={titlePanel}>
        <img src="/moonRotating.webp" className={moon} />
      </div>
    </div>
  );
};

export default TopPanel;
