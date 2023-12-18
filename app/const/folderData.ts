import folderStructure from "@/app/lib/folderStructure";

const folderData: folderStructure[] = [
  {
    name: "お絵かき",
    type: "folder",
    items: [
      {
        name: "日記",
        type: "img",
        src: "/gallery/diary",
      },
      {
        name: "ちゃんとした絵",
        type: "folder",
        items: [],
      },
    ],
  },
  {
    name: "お出かけ",
    type: "folder",
    items: [
      {
        name: "探訪",
        type: "folder",
        items: [],
      },
      {
        name: "素手で持ち帰り男",
        type: "img",
        src: "/gallery/fogot-my-bag",
      },
    ],
  },
  {
    name: "オススメ",
    type: "folder",
    items: [
      {
        name: "tanatrium",
        type: "url",
        src: "https://tanatrium.net/",
      },
    ],
  },

  {
    name: "新しいフォルダ",
    type: "folder",
    items: [],
  },
  {
    name: "新しいフォルダ（1）",
    type: "folder",
    items: [],
  },
  {
    name: "新しいフォルダ（2）",
    type: "folder",
    items: [
      {
        name: "ムホホ",
        type: "url",
        src: "https://book.dmm.co.jp/product/4049349/s011akamj00497/?i3_ref=list&i3_ord=10&dmmref=a_List_commonList",
      },
    ],
  },
  {
    name: "README",
    type: "txt",
    src: "/readme-page",
  },
];

export default folderData;
