import {FaEdit} from "react-icons/fa";
import {AiOutlineEdit} from "react-icons/ai";

interface KeepCardProps {
    title: string;
    description: string;
}

export function KeepCard({title, description}: KeepCardProps) {

    const KeepContent = function CardContent() {
        if (title == "" && description == "") {
            return (<div>
                <h3 className="text-2xl text-gray-500">Empty Note</h3>
            </div>)
        }
        return <div>
            <h3 className="text-2xl text-gray-500 ">{title}</h3>
            <p className="text-gray-500 overflow-clip overflow-hidden">{description}</p>
        </div>;
    }
    return (
        <div
            className="bg-slate-200 shadow-sm rounded-lg w-[288px] lg:w-[332px] min-h-[88px] max-h-fit  relative group hover:shadow-xl delay-200">
            <div className="absolute hidden delay-200 right-4 top-2 group-hover:inline ">
                <AiOutlineEdit className="w-[24px] h-[24px]"/>
            </div>
            <div className="px-[12px] py-[12px] flex flex-col " id="mainContent">
                <KeepContent/>
            </div>

        </div>
    );
}
