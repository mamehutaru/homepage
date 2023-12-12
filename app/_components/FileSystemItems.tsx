import folderStructure from "@/app/lib/folderStructure";
import Link from "next/link";

type itemsProps = {
  childItems: folderStructure;
  changeCurrentFolder: (newFolder: folderStructure[]) => void;
};

const FileSystemItems = ({ childItems, changeCurrentFolder }: itemsProps) => {
  console.log(childItems.items);

  return (
    <>
      {childItems.type === "folder" ? (
        <>
          <button
            onClick={() => {
              changeCurrentFolder(childItems.items || []);
            }}
          >
            <p>{childItems.name}</p>
            <p>{childItems.type}</p>
          </button>
          <Link href={`/?${childItems.name}`}>くりっく！</Link>
        </>
      ) : (
        <>
          <p>{childItems.name}</p>
          <p>{childItems.type}</p>
        </>
      )}
    </>
  );
};

export default FileSystemItems;
