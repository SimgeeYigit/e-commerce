
function Explore() {
    return (
        <div className="flex flex-col md:mx-[128px] gap-4 my-0 md:my-20 items-center md:justify-center md:flex-row">
            <div>
                <div className="w-[21.5625rem] h-[34.75rem] md:w-[611px] md:h-[572px] flex flex-col justify-end bg-cover bg-center bg-mobile-explore-1 md:bg-explore-1">
                    <div className="bg-[#2D8BC0BF] w-[346px] md:w-[420px] h-[238px] pt-[60px] pl-[41px] md:pl-[66px] flex flex-col gap-5">
                        <p className="text-[#FFFFFF] font-montserrat font-bold text-2xl">
                            Top Product Of <br />
                            the Week
                        </p>
                        <button className="text-[#FFFFFF] font-bold text-sm py-[15px] px-10 border rounded-[5px] border-[#FFFFFF] w-[198px] h-[52px]">EXPLORE ITEMS</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[1.375rem]">
                <div className="w-[21.625rem] h-[24.875rem] flex flex-col justify-end bg-cover bg-center bg-mobile-explore-2 md:bg-explore-2 md:w-[34.8125rem] md:h-[18.0625rem]"
                    >
                    <div className="bg-[#2D8BC0BF] w-[21.625rem] h-[238px] md:h-[10.8125rem] flex flex-col gap-5 md:pl-9 md:pt-10 pt-[60px] pl-[41px]">
                        <h4 className="text-[#FFFFFF] font-montserrat font-bold md:font-normal text-2xl md:text-xl">Top Product Of <br className="block md:hidden"/> The Week</h4>
                        <button className="text-[#FFFFFF] font-bold text-sm py-[15px] px-10 border rounded-[5px] border-[#FFFFFF] w-[198px] h-[52px]">EXPLORE ITEMS</button>
                    </div>
                </div>

                <div className="md:w-[34.8125rem] md:h-[16.3125rem] w-[344px] h-[398px] flex flex-col justify-end bg-cover bg-center bg-mobile-explore-3 md:bg-explore-3"
                    >
                    <div className="bg-[#2D8BC0BF] md:w-[22.5rem] w-[344px] h-[238px] md:h-[9.5625rem] flex flex-col gap-4 md:pl-9 md:pt-10 pt-[60px] pl-[41px]">
                        <h4 className="text-[#FFFFFF] font-montserrat font-bold md:font-normal text-2xl md:text-xl">Top Product Of <br className="block md:hidden"/>The Week</h4>
                        <button className="text-[#FFFFFF] font-bold text-sm py-[15px] px-10 border rounded-[5px] border-[#FFFFFF] w-[198px] h-[52px]">
                            EXPLORE ITEMS
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;