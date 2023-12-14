import FileSystemPanel from "@/app/_components/fileManager/FileSystemPanel";
import { SearchParams } from "@/app/lib/utils";
import TopPanel from "./_components/topPanel";

const page = ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <main>
      <TopPanel />
      <FileSystemPanel searchParams={searchParams} />
    </main>
  );
};

export default page;
