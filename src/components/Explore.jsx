import one from "../assets/homepage/explore/1.jpg";
import two from "../assets/homepage/explore/2.jpg";
import three from "../assets/homepage/explore/3.jpg";

function Explore() {
    return (
        <div className="flex mx-[128px] gap-4 my-20 justify-center">
            <div>
                <div className="w-[611px] h-[572px] flex flex-col justify-end bg-cover bg-center "
                    style={{ backgroundImage: `url(${one})` }}>
                    <div className="bg-[#2D8BC0BF] w-[420px] h-[238px] pt-[60px] pl-[66px] flex flex-col gap-5">
                        <p className="text-[#FFFFFF] font-montserrat font-bold text-2xl">
                            Top Product Of <br />
                            the Week
                        </p>
                        <button className="text-[#FFFFFF] font-bold text-sm py-[15px] px-10 border rounded-[5px] border-[#FFFFFF] w-[198px] h-[52px]">EXPLORE ITEMS</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[1.375rem]">
                <div className="w-[34.8125rem] h-[18.0625rem] flex flex-col justify-end bg-cover bg-center"
                    style={{ backgroundImage: `url(${two})` }}>
                    <div className="bg-[#2D8BC0BF] w-[21.6875rem] h-[10.8125rem] flex flex-col gap-5 pl-9 pt-10">
                        <h4 className="text-[#FFFFFF] font-montserrat font-normal text-xl">Top Product Of The Week</h4>
                        <button className="text-[#FFFFFF] font-bold text-sm py-[15px] px-10 border rounded-[5px] border-[#FFFFFF] w-[198px] h-[52px]">EXPLORE ITEMS</button>
                    </div>
                </div>

                <div className="w-[34.8125rem] h-[16.3125rem] flex flex-col justify-end bg-cover bg-center"
                    style={{ backgroundImage: `url(${three})` }}>
                    <div className="bg-[#2D8BC0BF] w-[22.5rem] h-[9.5625rem] flex flex-col gap-4 pl-9 pt-10">
                        <h4 className="text-[#FFFFFF] font-montserrat font-normal text-xl">Top Product Of The Week</h4>
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