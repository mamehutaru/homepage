//"use client";
import { SearchParams } from "@/app/lib/utils";
import { css } from "@/styled-system/css";
import Image from "next/image";
import Link from "next/link";
import diary from "@/app/const/gallery/diary";

const photo = css({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const container = css({
  width: "100%",
  display: "grid",
  gap: "1vw",
  //bg: "#e8579a",
  gridTemplateColumns: "1fr 1fr",
});

const imageWrapper = css({
  width: "100%",
  aspectRatio: "1/1",
  overflow: "hidden",
  //borderRadius: "1rem",
  //background: "#f00",
});

const page = ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: SearchParams;
}) => {
  console.log(diary);

  return (
    <main style={{ backgroundColor: "#000", minHeight: "100vh" }}>
      <div className={container}>
        {diary.map((image) => {
          return (
            <div className={imageWrapper}>
              <Image
                src={image.src}
                width="800"
                height="800"
                alt=""
                className={photo}
              />
            </div>
          );
        })}
      </div>
      <Link href="/">戻る</Link>
    </main>
  );
};

export default page;
