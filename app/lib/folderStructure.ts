type folderStructure = {
  name: string;
  type: "folder" | "file";
  items?: folderStructure[];
  src?: string;
};

export default folderStructure;
