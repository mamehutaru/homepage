//"use client";
import { SearchParams } from "@/app/lib/utils";
import { css } from "@/styled-system/css";
import Image from "next/image";
import Link from "next/link";
import index from "@/app/const/gallery";

const photo = css({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  _active: {
    objectFit: "contain",
  },
});

const container = css({
  width: "100%",
  display: "grid",
  gap: "2px",
  //bg: "#e8579a",
  gridTemplateColumns: [
    "1fr 1fr",
    "1fr 1fr",
    "1fr 1fr 1fr",
    "1fr 1fr 1fr 1fr",
    "1fr 1fr 1fr 1fr ",
  ],
});

const imageWrapper = css({
  width: "100%",
  aspectRatio: "1/1",
  overflow: "hidden",
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
  textShadow: "0px 0px 4px #212121",
});

const page = ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: SearchParams;
}) => {
  const imageFolder = index.find((item) => item.folderId === params.id);
  const imageData = imageFolder?.data;
  console.log(imageData);

  return (
    <main
      style={{
        backgroundColor: "#212121",
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(0deg, transparent 1rem, #444 calc(1rem + 1px)), linear-gradient(90deg, #212121 1rem, #444 calc(1rem + 1px))",
        backgroundSize: "calc(1rem + 1px) calc(1rem + 1px)",
        backgroundPosition: "center center",
      }}
    >
      <div className={container}>
        {imageData?.map((image) => {
          return (
            <Link
              className={imageWrapper}
              href={`/gallery/${params.id}/${image.src}`}
            >
              <Image
                src={`${process.env.STORAGE_URL}/${params.id}/${image.src}`}
                width={720}
                height={480}
                alt=""
                placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMU7QQAALkAoBhb83IAAAAASUVORK5CYII="
                className={photo}
              />
            </Link>
          );
        })}
      </div>
      <Link href={`/`} className={backButton}>
        冥界
      </Link>
    </main>
  );
};

export default page;
