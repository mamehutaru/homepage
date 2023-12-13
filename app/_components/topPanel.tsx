import TwitterSvg from "@/public/twitterSvg";
import { css } from "@/styled-system/css";

const topPanelWrapper = css({
  width: "100vw",
  aspectRatio: "4 / 3",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr 1fr",
  columnGap: "2px",
  rowGap: "2px",
  bg: "#000",
  "& div": {
    bg: "#fff",
  },
});

const mainImagePanel = css({
  gridRowStart: "1",
  gridRowEnd: "3",
  gridColumnStart: "1",
  gridColumnEnd: "1",
  bg: "#fff",
});

const switchPanel = css({
  bg: "#7fffd4",
});

const linkPanel = css({
  gridRowStart: "3",
  gridRowEnd: "3",
  display: "flex",
  bg: "#7fffd4",
});

const titlePanel = css({
  display: "flex",
  gridRowStart: "2",
  gridRowEnd: "4",
  bg: "#7fffd4",
  textAlign: "center",
  "& span": {
    display: "block",
    margin: "auto",
  },
});

const linkItem = css({
  display: "block",
  aspectRatio: "1/1",
  height: "50%",
  //bg: "#f0f",
  margin: "auto",
});

const linkIcon = css({
  //bg: "#f00",
  height: "100%",
  width: "100%",
  fill: "#fff",
  stroke: "#000",
});

const TopPanel = () => {
  return (
    <div className={topPanelWrapper}>
      <div className={mainImagePanel}>img</div>
      <div className={switchPanel}>switch</div>
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
