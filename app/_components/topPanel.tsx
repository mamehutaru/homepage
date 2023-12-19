import TwitterSvg from "@/public/twitterSvg";
import { css } from "@/styled-system/css";
import ThemeToggleMoon from "./themeToggleButton";
import { SearchParams } from "../lib/utils";
import { Montserrat } from "next/font/google";
import RonaldSvg from "@/public/ronaldSvg";

const montserratItalic = Montserrat({
  weight: "900",
  style: "italic",
  subsets: ["latin-ext"],
});

const topPanelWrapper = css({
  width: "100%",
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
  position: "relative",
  gridRowStart: "1",
  gridRowEnd: "3",
  gridColumnStart: "1",
  gridColumnEnd: "1",
  bg: "var(--bg-color)",
  overflow: "hidden",
  height: "100%",
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
  "& svg": {
    width: "auto",
    height: "95%",
    fill: "var(--theme-color)",
    margin: "auto",
  },
});

const linkPanel = css({
  gridRowStart: "3",
  gridRowEnd: "3",
  display: "flex",
  backgroundImage: "radial-gradient(var(--theme-color) 1px, var(--bg-color) 0)",
  backgroundSize: "0.8rem 0.8rem",
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
  border: "0.1rem solid var(--theme-color)",
  boxShadow: "0.15rem 0.15rem 0px 0px var(--theme-color)",
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

const responsiveHide = css({
  display: [undefined, undefined, undefined, "none", "none"],
});

const imageMask = css({
  maskImage: "url('/mainImage.webp')",
  WebkitMaskImage: "url('/mainImage.webp')",
  maskSize: "cover",
  WebkitMaskSize: "cover",
  maskMode: "luminance",
  maskPosition: "bottom",
  WebkitMaskPosition: "bottom",
});

const TopPanel = ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <div className={`${topPanelWrapper} ${responsiveHide}`}>
      <div className={`${mainImagePanel} ${imageMask}`}>
        <span>冥界</span>
      </div>

      <div className={decorationPanel}>
        <RonaldSvg />
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
