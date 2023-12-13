import FileSystemBoard from "@/app/_components/fileManager/FileSystemBoard";
import { SearchParams } from "@/app/lib/utils";
import TopPanel from "./_components/topPanel";

const page = ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <main>
      <TopPanel />
      <FileSystemBoard searchParams={searchParams} />
    </main>
  );
};

export default page;
