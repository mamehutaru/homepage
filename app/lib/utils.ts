import FolderStructure from "./folderStructure";

export type SearchParams = {
  [key: string]: string | undefined;
};

//親子構造が示された配列を用いて，folderDataを探索．
//結果として，親子構造内のもっとも下層の子の中身を返す再帰関数（天才）
export const searchCurrentDirItems = (
  dirNames: string[],
  dir: FolderStructure[]
): FolderStructure[] | undefined => {
  const currentDirName = dirNames[0]; //もっとも階層が上のディレクトリ
  const currentDir = dir.find((item) => item.name === currentDirName); //dirの中から，次のdirNameに一致するdirを探す

  if (!currentDir) {
    return undefined;
  }

  if (dirNames.length === 1) {
    //もっとも下層の子にたどり着いたら終了
    return currentDir.items; //もっとも下層の子の中身を返す．
  } else {
    return searchCurrentDirItems(dirNames.slice(1), currentDir.items!); //再帰的処理
  }
};
