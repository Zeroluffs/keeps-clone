import { FaEdit } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";

export function KeepCard() {
  return (
      <div className="bg-slate-200 shadow-sm rounded-lg w-[288px] lg:w-[364px] h-[64px] relative group hover:shadow-xl delay-200">
        <div className="absolute hidden delay-200 right-4 top-2 group-hover:inline ">
          <AiOutlineEdit className="w-[24px] h-[24px]" />
        </div>
      </div>
  );
}
