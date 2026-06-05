import { ArrowUp } from "lucide-react";

function TableHeader() {
  return (
    <div className="grid grid-cols-[1fr_160px_140px_80px] h-[34px] px-4 border-b border-[#E4E5E6]">
      <div className="flex items-center text-xs font-medium gap-2 pl-5">
        <span>Name</span>
        <ArrowUp className="size-3 stroke-[2px]" />
      </div>

      <div className="flex items-center text-xs font-medium mr-5">
        Edited By
      </div>

      <div className="flex items-center text-xs font-medium mr-5">
        Last Edited
      </div>

      <div className="flex items-center text-xs font-medium mr-10">Actions</div>
    </div>
  );
}

export default TableHeader;
