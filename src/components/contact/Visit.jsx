import { Phone, MapPin, Mail, Redo } from "lucide-react";

function Visit() {
    return (
        <>
            <div className="flex flex-col w-auto py-[112px] gap-20 font-montserrat md:bg-white bg-[#FAFAFA] px-[35px] md:px-0">
                <div className="flex flex-col items-center gap-[10px]">
                    <h6 className="font-bold text-sm text-[#252B42]">VISIT OUR OFFICE</h6>
                    <h2 className="font-bold text-[40px] text-[#252B42] text-center">We help small businesses <br className="hidden md:block" />
                        with big ideas</h2>
                </div>
                <div className="flex justify-center md:flex-row flex-col md:gap-0 gap-[30px]">
                    <div className="flex flex-col py-[50px] gap-[15px] items-center justify-center bg-white px-[40px]">
                        <Phone className="text-[#23A6F0] w-[72px] h-[72px]" />
                        <div className="font-bold text-[#252B42] text-sm flex flex-col items-center gap-1">
                            <h6>georgia.young@example.com</h6>
                            <h6>georgia.young@ple.com</h6>
                        </div>
                        <h5 className="font-bold text-[#252B42] text-base">Get Support</h5>
                        <button
                            className="md:rounded-[37px] rounded-[5px] border border-[#23A6F0] text-[#23A6F0] font-bold text-sm py-[15px] px-9"
                        >Submit Request</button>
                    </div>
                    <div className="flex flex-col md:py-[50px] px-[40px] py-20 gap-[15px] items-center justify-center bg-[#252B42]">
                        <MapPin className="text-[#23A6F0] w-[72px] h-[72px]" />
                        <div className="font-bold text-[#FFFFFF] text-sm flex flex-col items-center gap-1">
                            <h6>georgia.young@example.com</h6>
                            <h6>georgia.young@ple.com</h6>
                        </div>
                        <h5 className="font-bold text-[#FFFFFF] text-base">Get Support</h5>
                        <button
                            className="md:rounded-[37px] rounded-[5px] border border-[#23A6F0] text-[#23A6F0] font-bold text-sm py-[15px] px-9"
                        >Submit Request</button>
                    </div>
                    <div className="flex flex-col py-[50px] px-[40px] gap-[15px] items-center justify-center bg-white">
                        <Mail className="text-[#23A6F0] w-[72px] h-[72px]" />
                        <div className="font-bold text-[#252B42] text-sm flex flex-col items-center gap-1">
                            <h6>georgia.young@example.com</h6>
                            <h6>georgia.young@ple.com</h6>
                        </div>
                        <h5 className="font-bold text-[#252B42] text-base">Get Support</h5>
                        <button
                            className="md:rounded-[37px] rounded-[5px] border border-[#23A6F0] text-[#23A6F0] font-bold text-sm py-[15px] px-9"
                        >Submit Request</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 pb-[112px] md:pb-20 font-montserrat md:pt-0 pt-8">
                <Redo className="rotate-45 w-20 h-20 text-[#23A6F0]" />
                <h5 className="font-bold text-base text-[#252B42]">WE Can't WAIT TO MEET YOU</h5>
                <h1 className="font-bold text-[58px] text-[#252B42]">Let’s Talk</h1>
                <button className="rounded-[5px] border border-[#23A6F0] py-[15px] px-10 bg-[#23A6F0] font-bold text-[#FFFFFF] text-sm">Try it free now</button>
            </div>
        </>
    );
}
export default Visit;