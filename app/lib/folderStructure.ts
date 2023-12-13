type FolderStructure = {
  name: string;
  type: "folder" | "file";
  items?: FolderStructure[];
  src?: string;
};

export default FolderStructure;
