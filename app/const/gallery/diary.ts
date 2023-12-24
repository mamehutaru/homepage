type imageData = {
  title: string;
  caption?: string;
  src: string;
};

const diary: imageData[] = [
  {
    title: "11月の日記#1",
    src: "D_20231101.webp",
  },
  {
    title: "11月の日記#2",
    caption:
      "紅棗（ナツメ）に切れ込みを入れ，その中にクルミを挟んだお菓子です．そもそもあんまりおいしくない．",
    src: "D_20231102.webp",
  },
  {
    title: "12月の日記#1",
    caption: "風邪",
    src: "D_20231201.webp",
  },
  {
    title: "12月の日記#2",
    caption: "ジャンパーがペラすぎる。カツオ節のほうがまだ分厚い。",
    src: "IMG_0583.webp"
  }
];

export default diary;
