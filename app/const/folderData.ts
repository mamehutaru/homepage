import folderStructure from "@/app/lib/folderStructure";

const folderData: folderStructure[] = [
  {
    name: "お絵かき",
    type: "folder",
    items: [
      {
        name: "日記",
        type: "file",
        src: "/gallery/diary",
      },
      {
        name: "ちゃんとした絵",
        type: "folder",
        items: [
          {
            name: "ファンアート",
            type: "file",
            src: "/",
          },
          {
            name: "オリジナル",
            type: "file",
            src: "/",
          },
          {
            name: "その他",
            type: "file",
            src: "/",
          },
        ],
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
        src: "/",
      },
      {
        name: "探訪",
        type: "folder",
        items: [
          {
            name: "2020東扇島",
            type: "folder",
            items: [
              {
                name: "海岸",
                type: "file",
                src: "/",
              },
            ],
          },
          {
            name: "2018奥多摩",
            type: "folder",
            items: [
              {
                name: "海岸",
                type: "file",
                src: "",
              },
            ],
          },
        ],
      },
      {
        name: "素手で持ち帰り男",
        type: "file",
        src: "/",
      },
    ],
  },
  {
    name: "オススメ",
    type: "folder",
    //items: [],
  },

  {
    name: "新しいフォルダ",
    type: "folder",
    items: [],
  },
  {
    name: "新しいフォルダ(1)",
    type: "folder",
    items: [],
  },
  {
    name: "新しいフォルダ(2)",
    type: "folder",
    items: [],
  },
  {
    name: "新しいフォルダ(3)",
    type: "folder",
    items: [],
  },
  {
    name: "新しいフォルダ(4)",
    type: "folder",
    items: [],
  },
  {
    name: "新しいフォルダ(5)",
    type: "folder",
    items: [],
  },
];

export default folderData;
