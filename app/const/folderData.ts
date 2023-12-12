import folderStructure from "@/app/lib/folderStructure";

const folderData: folderStructure[] = [
  {
    name: "お絵かき",
    type: "folder",
    items: [
      {
        name: "日記",
        type: "file",
        src: "",
      },
      {
        name: "ちゃんとした絵",
        type: "file",
        src: "",
      },
    ],
  },
  {
    name: "お出かけ",
    type: "folder",
    items: [
      {
        name: "お散歩",
        type: "file",
        src: "",
      },
      {
        name: "探訪",
        type: "folder",
        //items: [],
      },
      {
        name: "素手で持ち帰り男",
        type: "file",
        src: "",
      },
    ],
  },
  {
    name: "オススメ",
    type: "folder",
    //items: [],
  },
];

export default folderData;
