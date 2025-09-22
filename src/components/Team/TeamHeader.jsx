import { useHistory } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function TeamHeader() {
    const history = useHistory();

    return (
        <header className="font-montserrat flex flex-col items-center gap-4 py-[50px]">
            <h5 className="font-bold text-base text-[#737373]">WHAT WE DO</h5>
            <h1 className="font-bold text-[58px] text-[#252B42]">Innovation tailored for you</h1>
            <div className="flex items-center py-[10px] gap-[15px]">
                <button className="font-bold text-[#252B42] text-sm" onClick={() => history.push("/")}>Home</button>
                <ChevronRight className="w-6 h-6 text-[#BDBDBD]" />
                <h6 className="font-bold text-[#737373] text-sm">Team</h6>
            </div>
        </header>
    );
}
export default TeamHeader;