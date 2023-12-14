import TwitterSvg from "@/public/twitterSvg";
import { css } from "@/styled-system/css";
import Link from "next/link";

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
    bg: "var(--bg-color)",
  },
});

const mainImagePanel = css({
  gridRowStart: "1",
  gridRowEnd: "3",
  gridColumnStart: "1",
  gridColumnEnd: "1",
});

const switchPanel = css({});

const linkPanel = css({
  gridRowStart: "3",
  gridRowEnd: "3",
  display: "flex",
});

const titlePanel = css({
  display: "flex",
  gridRowStart: "2",
  gridRowEnd: "4",

  textAlign: "center",
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
});

const linkIcon = css({
  height: "70%",
  width: "70%",
  margin: "auto",
  fill: "var(--theme-color)",
});

const TopPanel = () => {
  return (
    <div className={topPanelWrapper}>
      <div className={mainImagePanel}>img</div>
      <div className={switchPanel}>
        <Link href={{ pathname: "/", query: { mode: "dark" } }}>switch</Link>
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
        <span>#newestChange</span>
      </div>
    </div>
  );
};

export default TopPanel;
