import { TableOfContents, LayoutGrid, ChevronDown } from "lucide-react";
import { useState } from "react";

function Show({ showColumns, setShowColumns }) {

    return (
        <div className="font-montserrat flex items-center justify-between py-6 px-0 md:px-[180px] md:flex-row flex-col gap-6">
            <h6 className="font-bold text-sm text-[#737373]">Showing all 12 results</h6>
            <div className="flex gap-[15px] items-center">
                <h6 className="font-bold text-sm text-[#737373]">Views:</h6>
                <button
                    onClick={() => setShowColumns(false)}
                    className={`border rounded-[5px] border-[#ECECEC] p-[15px] 
                    ${!showColumns ? "text-[#252B42]" : "text-[#737373]"}`}><LayoutGrid className="w-4 h-4" /></button>
                <button
                    onClick={() => setShowColumns(true)}
                    className={`border rounded-[5px] border-[#ECECEC] p-[15px] 
                    ${showColumns ? "text-[#252B42]" : "text-[#737373]"}`}><TableOfContents className="w-4 h-4 rotate-180" /></button>
            </div>
            <div className="flex gap-[10px] items-center">
                <div className="w-[141px] h-[50px] flex items-center justify-center border rounded-[5px] gap-2 text-[#737373]">
                    <h6 className="font-normal text-sm">Popularity</h6>
                    <ChevronDown className="w-4 h-4" />
                </div>
                <h6 className="w-[94px] h-[50px] flex items-center justify-center bg-[#23A6F0] border rounded-[5px] font-bold text-sm text-[#FFFFFF] m-0">
                    Filter
                </h6>
            </div>
        </div>
    );
}
export default Show;