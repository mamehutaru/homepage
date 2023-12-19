import { SearchParams } from "@/app/lib/utils";
import { css } from "@/styled-system/css";
import Image from "next/image";
import index from "@/app/const/gallery";
import { Zen_Kaku_Gothic_Antique } from "next/font/google";
import Link from "next/link";

const zenNomarl = Zen_Kaku_Gothic_Antique({
  weight: "400",
  style: "normal",
  subsets: ["latin-ext"],
});

const pageWrapper = css({
  display: "block",
  margin: "auto",
  width: "100vw",
  minHeight: "100vh",
  bg: "#212121",
  //color: "var(--theme-color)",
  backgroundImage:
    "linear-gradient(0deg, transparent 1rem, #444 calc(1rem + 1px)), linear-gradient(90deg, #212121 1rem, #444 calc(1rem + 1px))",
  backgroundSize: "calc(1rem + 1px) calc(1rem + 1px)",
  backgroundPosition: "center center",
});

const imageWrapper = css({
  display: "block",
  width: "100vw",
  height: "auto",
  //bg: "#f00",
});

const captionWrapper = css({
  //bg: "#ccc",
  width: "100%",
  height: "auto",
  padding: "1.5rem 1.5rem 3rem 1.5rem",
  color: "#eee",
  "& h1": {
    fontSize: "1.4rem",
    marginBottom: "0.6rem",
  },
  "& section": {
    marginLeft: "0px",
  },
});

const imageItem = css({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

const backButton = css({
  display: "block",
  fontSize: "2rem",
  fontStyle: "italic",
  position: "fixed",
  bottom: "1.5rem",
  right: "1.5rem",
  color: "#eee",
  zIndex: "3",
  textShadow: "0px 0px 4px #222",
});

const page = async ({
  params,
  searchParams,
}: {
  params: { id: string; highRes: string };
  searchParams: SearchParams;
}) => {
  const imageFolder = index.find((item) => item.folderId === params.id);
  const imageData = imageFolder?.data;
  const currentImage = imageData?.find((item) => item.src === params.highRes);

  return (
    <main className={pageWrapper}>
      <div className={imageWrapper}>
        <Image
          src={`${process.env.STORAGE_URL}/${params.id}/${params.highRes}`}
          width={4096}
          height={4096}
          alt=""
          placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMU7QQAALkAoBhb83IAAAAASUVORK5CYII="
          className={imageItem}
        />
      </div>
      <div className={captionWrapper}>
        <h1>{currentImage?.title}</h1>
        <section className={zenNomarl.className}>
          {currentImage?.caption}
        </section>
      </div>
      <Link href={`/`} className={backButton}>
        冥界
      </Link>
    </main>
  );
};

export const runtime = "edge";

export default page;
