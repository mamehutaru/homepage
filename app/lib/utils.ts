import FolderStructure from "./folderStructure";

export type SearchParams = {
  [key: string]: string | undefined;
};

//pathを用いて，folderDataを探索して，現在のディレクトリの中身を返す再帰関数（天才）
export const searchCurrentDirItems = (
  path: string,
  dir: FolderStructure[]
): FolderStructure[] | undefined => {
  if (path === "") {
    return dir;
  }

  //"_a_b_c"から"a"を抽出
  const parts = path.split("_").filter(Boolean);
  const currentDirName = parts[0];

  //渡されたディレクトリ直下で，名前が"a"のディレクトリを探す
  const currentDir = dir.find((item) => item.name === currentDirName); //dirの中から，次のdirNameに一致するdirを探す

  if (!currentDir) {
    return undefined;
  }

  //次の階層のディレクトリを探索するために"_a_b_c"を"_b_c"にする
  const nextPath = parts.length !== 0 ? "_" + parts.slice(1).join("_") : "";

  if (parts.length === 1) {
    //もっとも下層の子にたどり着いたら終了
    return currentDir.items;
  } else {
    return searchCurrentDirItems(nextPath, currentDir.items!); //再帰的処理
  }
};
