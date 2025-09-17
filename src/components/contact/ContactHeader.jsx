import { useHistory } from "react-router-dom";
import { MoveRight } from "lucide-react";

function ContactHeader() {
    const history = useHistory();

    return (
        <>
            <div className="flex items-center px-[180px] h-[91px] gap-36 font-montserrat">
                <div>
                    <h3 className="font-bold text-2xl text-[#252B42]">Bandage</h3>
                </div>
                <div className="flex justify-between w-full">
                    <div className="flex font-bold text-sm text-[#737373] gap-[21px]">
                        <button onClick={() => history.push("/")}>Home</button>
                        <button onClick={() => history.push("/product")}>Product</button>
                        <button onClick={() => history.push("/pricing")}>Pricing</button>
                        <button onClick={() => history.push("/contact")}>Contact</button>
                    </div>
                    <div className="flex gap-[45px]">
                        <button className="font-bold text-sm text-[#23A6F0]" onClick={() => history.push("/login")}>Login</button>
                        <div
                            className="w-[223px] h-[52px] flex items-center justify-center border border-[#23A6F0] rounded-[5px] text-[#FFFFFF] font-bold text-sm bg-[#23A6F0] py-[15px] px-[25px] gap-[15px]">
                            <button
                                onClick={() => history.push("/register")}>Become a member</button>
                            <MoveRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactHeader;