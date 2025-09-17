import { useHistory } from "react-router-dom";
import { MoveRight, Search, ShoppingCart, ChartNoAxesColumnIncreasing } from "lucide-react";
import { useState } from "react";

function ContactHeader() {
    const history = useHistory();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (

        <>
            <div className="flex items-center px-[30px] md:px-[180px] h-[91px] md:gap-36 font-montserrat md:bg-white bg-[#F6F6F6]">
                    <h3 className="font-bold text-2xl text-[#252B42]">Bandage</h3>
                <div className="flex justify-between w-full">
                    <div className="hidden md:flex font-bold text-sm text-[#737373] gap-[21px]">
                        <button onClick={() => history.push("/")}>Home</button>
                        <button onClick={() => history.push("/product")}>Product</button>
                        <button onClick={() => history.push("/pricing")}>Pricing</button>
                        <button onClick={() => history.push("/contact")}>Contact</button>
                    </div>
                    <div className="flex gap-[45px]">
                        <button className="font-bold text-sm text-[#23A6F0] hidden md:block" onClick={() => history.push("/login")}>Login</button>
                        <div
                            className="hidden md:flex md:flex-row items-center justify-center border border-[#23A6F0] rounded-[5px] text-[#FFFFFF] font-bold text-sm bg-[#23A6F0] py-[15px] px-[25px] gap-[15px]">
                            <button
                                onClick={() => history.push("/register")}>Become a member</button>
                            <MoveRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>
                <div className="flex md:hidden gap-4">
                    <Search className="w-6 h-6 text-[#737373]" />
                    <ShoppingCart className="w-6 h-6 text-[#737373]" />
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <ChartNoAxesColumnIncreasing className='block -rotate-90 text-[#737373] w-6 h-6' />
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className='md:hidden font-montserrat font-normal text-2xl text-[#737373] flex flex-col items-center gap-6 bg-[#F6F6F6] pt-10 pb-16'>
                    <h1 onClick={() => history.push("/")}>Home</h1>
                    <h1 onClick={() => history.push("/product")}>Product</h1>
                    <h1 onClick={() => history.push("/pricing")}>Pricing</h1>
                    <h1 onClick={() => history.push("/contact")}>Contact</h1>
                </div>
            )}
        </>
    )
}
export default ContactHeader;