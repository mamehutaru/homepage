import Link from "next/link";
import { SearchParams } from "../lib/utils";
import { css } from "@/styled-system/css";
import Image from "next/image";

const ThemeToggleMoon = ({ searchParams }: { searchParams: SearchParams }) => {
  const moonWrapper = css({
    display: "block",
    height: "50%",
    aspectRatio: "1/1",
    margin: "auto",
    position: "relative",

    _active: {
      transform: "scale(0.9)",
    },
  });

  const moon = css({
    filter:
      " opacity(100%)  invert(var(--moon-invert)) drop-shadow(0px 0px 0px var(--theme-color))",
    height: "100%",
    width: "100%",
  });

  return (
    <Link
      href={`?${searchParams["dir"] ? "&dir=" + searchParams["dir"] : ""}${
        searchParams["theme"] === "dark" ? "" : "&theme=" + "dark"
      }`}
      replace
      scroll={false}
      className={moonWrapper}
    >
      <Image
        src="/moonRotating.webp"
        alt={"rotating moon"}
        width={160}
        height={160}
        className={moon}
      />
    </Link>
  );
};

export default ThemeToggleMoon;
