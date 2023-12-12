"use client";

import folderData from "@/app/const/folderData";
import FileSystemItems from "@/app/_components/FileSystemItems";
import { useState } from "react";
import folderStructure from "@/app/lib/folderStructure";

const FileSystemBoard = () => {
  const [currentFolder, setCurrentFolder] = useState(folderData);

  const changeCurrentFolder = (newFolder: folderStructure[]) => {
    setCurrentFolder(newFolder);
  };

  return (
    <div>
      FileSystemBoard
      <div>
        {currentFolder.map((childItems) => {
          return (
            <FileSystemItems
              childItems={childItems}
              changeCurrentFolder={changeCurrentFolder}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FileSystemBoard;
