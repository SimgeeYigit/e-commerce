import image from "/assets/productdetailpage/Description/image.jpg";
import { ChevronRight } from "lucide-react";

function ProductDescription() {
    return (
        <div>
            <div className="font-montserrat font-semibold text-[#737373] text-sm flex border-b gap-12 justify-center py-8 mx-[200px]">
                <h1>Description</h1>
                <h1>Additional Information</h1>
                <h1>Reviews <span className="text-[#23856D] font-bold">(0)</span></h1>
            </div>
            <div className="flex gap-[30px] mx-[200px] justify-between py-10">
                <div className="drop-shadow-[1rem_1rem_10px_rgba(0,0,0,0.5)]">
                    <img className="" src={image} alt="Product" />
                </div>
                <div className="flex flex-col w-[33%] gap-[30px]">
                    <h3 className="font-bold text-2xl text-[#252B42]">the quick fox jumps over </h3>
                    <p className="font-normal text-sm text-[#737373]">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.<br /><br />

                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.<br /><br />

                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.<br />
                    </p>
                </div>
                <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-[30px]">
                        <h3 className="font-bold text-2xl text-[#252B42]">the quick fox jumps over </h3>
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex items-center gap-[10px]">
                                <ChevronRight className="w-6 h-6 text-[#737373]" />
                                <h6 className="font-bold text-sm text-[#737373]">the quick fox jumps over the lazy dog</h6>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <ChevronRight className="w-6 h-6 text-[#737373]" />
                                <h6 className="font-bold text-sm text-[#737373]">the quick fox jumps over the lazy dog</h6>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <ChevronRight className="w-6 h-6 text-[#737373]" />
                                <h6 className="font-bold text-sm text-[#737373]">the quick fox jumps over the lazy dog</h6>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <ChevronRight className="w-6 h-6 text-[#737373]" />
                                <h6 className="font-bold text-sm text-[#737373]">the quick fox jumps over the lazy dog</h6>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[30px]">
                        <h3 className="font-bold text-2xl text-[#252B42]">the quick fox jumps over </h3>
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex items-center gap-[10px]">
                                <ChevronRight className="w-6 h-6 text-[#737373]" />
                                <h6 className="font-bold text-sm text-[#737373]">the quick fox jumps over the lazy dog</h6>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <ChevronRight className="w-6 h-6 text-[#737373]" />
                                <h6 className="font-bold text-sm text-[#737373]">the quick fox jumps over the lazy dog</h6>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <ChevronRight className="w-6 h-6 text-[#737373]" />
                                <h6 className="font-bold text-sm text-[#737373]">the quick fox jumps over the lazy dog</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductDescription;