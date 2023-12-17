type FolderStructure = {
  name: string;
  type: "folder" | "img" | "txt" | "url";
  items?: FolderStructure[];
  src?: string;
};

export default FolderStructure;
