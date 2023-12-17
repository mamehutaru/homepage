import diary from "./diary";
import fogotMyBag from "./fogot-my-bag";

type imageData = {
  title: string;
  caption?: string;
  src: string;
};

type Folder = {
  folderId: string;
  data: imageData[];
};

const folders: Folder[] = [
  {
    folderId: "diary",
    data: diary,
  },
  {
    folderId: "fogot-my-bag",
    data: fogotMyBag,
  },
];

export default folders;
