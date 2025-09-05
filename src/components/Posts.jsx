import { Star, Download, Clock, ChartNoAxesCombined, ChartGantt, ChevronRight, Heart, ShoppingCart, Eye } from "lucide-react";
import one from "../assets/homepage/posts/1.svg";
import two from "../assets/homepage/posts/2.svg";

function Posts() {
    return (
        <>
            <div className="flex flex-col py-20 gap-24 hidden md:block">
                <div className="flex flex-col items-center gap-[0.625rem]">
                    <h6 className="font-montserrat font-bold text-[#23A6F0] text-sm">Practice Advice</h6>
                    <h2 className="font-montserrat font-bold text-[#252B42] text-[2.5rem]">Featured Posts</h2>
                </div>
                <div className="flex mx-[9.876rem] justify-between">
                    <div className="flex">
                        <div className="relative inline-block">
                            <img src={one} alt="Post 1" className="block" />
                            <h6 className="absolute top-5 left-5 bg-[#E74040] rounded-[0.1875rem] 
                                    px-[0.625rem] py-[0.25rem] font-montserrat font-bold 
                                    text-sm text-[#FFFFFF]">
                                Sale
                            </h6>
                            <div className="absolute top-[340px] left-[35px] flex gap-[0.625rem]">
                                <div className="w-[40px] h-[40px] rounded-full bg-[#FFFFFF] flex items-center justify-center">
                                    <Heart className="w-5 h-5 text-[#252B42]" />
                                </div>
                                <div className="w-[40px] h-[40px] rounded-full bg-[#FFFFFF] flex items-center justify-center">
                                    <ShoppingCart className="w-5 h-5 text-[#252B42]" />
                                </div>
                                <div className="w-[40px] h-[40px] rounded-full bg-[#FFFFFF] flex items-center justify-center">
                                    <Eye className="w-5 h-5 text-[#252B42]" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col pt-[1.5625rem] pb-[2.1875rem] px-[1.5625rem] gap-[0.625rem]">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-montserrat font-bold text-[#23A6F0] text-sm">English Department</h3>
                                    <div className="flex bg-[#252B42] w-[3.125rem] h-[1.625rem] items-center rounded-[1.25rem] justify-center gap-[0.3125rem] p-[0.3125rem]">
                                        <Star className="w-[0.9375rem] h-[0.90625rem] text-[#FFCE31]" />
                                        <p className="font-montserrat font-normal text-[#FFFFFF] text-sm">4.9</p>
                                    </div>
                                </div>
                                <h5 className="font-montserrat font-bold text-[#252B42] text-base">Graphic Design</h5>
                                <p className="font-montserrat font-normal text-[#737373] text-sm">We focus on ergonomics and<br />
                                    meeting you where you work. It's<br />
                                    only a keystroke away.
                                </p>
                                <div className="flex items-center gap-[0.625rem]">
                                    <Download className="w-[1rem] h-[1rem] text-[#737373]" />
                                    <h6 className="font-montserrat font-bold text-[#737373] text-sm">15 Sales</h6>
                                </div>
                                <div className="flex py-[0.3125rem] px-[0.1875rem] gap-[0.3125rem]">
                                    <h5 className="font-montserrat font-bold text-[#BDBDBD] text-base">$16.48</h5>
                                    <h5 className="font-montserrat font-bold text-[#23856D] text-base">$6.48</h5>
                                </div>
                                <div className="flex gap-[0.38rem]">
                                    <div className="w-[1rem] h-[1rem] bg-[#23A6F0] rounded-full"></div>
                                    <div className="w-[1rem] h-[1rem] bg-[#23856D] rounded-full"></div>
                                    <div className="w-[1rem] h-[1rem] bg-[#E77C40] rounded-full"></div>
                                    <div className="w-[1rem] h-[1rem] bg-[#252B42] rounded-full"></div>
                                </div>
                                <div className="flex py-[0.9375rem] justify-between gap-2">
                                    <div className="flex gap-[0.3125rem]">
                                        <Clock className="w-[1rem] h-[1rem] text-[#23A6F0]" />
                                        <p className="font-montserrat font-normal text-[#737373] text-sm">22h...</p>
                                    </div>
                                    <div className="flex gap-[0.3125rem]">
                                        <ChartGantt className="w-[1rem] h-[1rem] text-[#E77C40]" />
                                        <p className="font-montserrat font-normal text-[#737373] text-sm">64 Lessons</p>
                                    </div>
                                    <div className="flex gap-[0.3125rem]">
                                        <ChartNoAxesCombined className="w-[1rem] h-[1rem] text-[#23856D]" />
                                        <p className="font-montserrat font-normal text-[#737373] text-sm">Progress</p>
                                    </div>
                                </div>
                                <button className="w-[8.82125rem] h-[2.75rem] rounded-[2.3125rem] border border-[#23A6F0] py-[0.625rem] px-[1.25rem]
                                        font-montserrat font-bold text-sm text-[#23A6F0] flex items-center justify-center">
                                    Learn More <ChevronRight className="w-[1rem] h-[1rem] text-[#23A6F0]" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="relative inline-block">
                            <img src={two} alt="Post 2" className="block" />
                            <h6 className="absolute top-5 left-5 bg-[#E74040] rounded-[0.1875rem] 
                                    px-[0.625rem] py-[0.25rem] font-montserrat font-bold 
                                    text-sm text-[#FFFFFF]">
                                Sale
                            </h6>
                            <div className="absolute top-[340px] left-[35px] flex gap-[0.625rem]">
                                <div className="w-[40px] h-[40px] rounded-full bg-[#FFFFFF] flex items-center justify-center">
                                    <Heart className="w-5 h-5 text-[#252B42]" />
                                </div>
                                <div className="w-[40px] h-[40px] rounded-full bg-[#FFFFFF] flex items-center justify-center">
                                    <ShoppingCart className="w-5 h-5 text-[#252B42]" />
                                </div>
                                <div className="w-[40px] h-[40px] rounded-full bg-[#FFFFFF] flex items-center justify-center">
                                    <Eye className="w-5 h-5 text-[#252B42]" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col pt-[1.5625rem] pb-[2.1875rem] px-[1.5625rem] gap-[0.625rem]">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-montserrat font-bold text-[#23A6F0] text-sm">English Department</h3>
                                    <div className="flex bg-[#252B42] w-[3.125rem] h-[1.625rem] items-center rounded-[1.25rem] justify-center gap-[0.3125rem] p-[0.3125rem]">
                                        <Star className="w-[0.9375rem] h-[0.90625rem] text-[#FFCE31]" />
                                        <p className="font-montserrat font-normal text-[#FFFFFF] text-sm">4.9</p>
                                    </div>
                                </div>
                                <h5 className="font-montserrat font-bold text-[#252B42] text-base">Graphic Design</h5>
                                <p className="font-montserrat font-normal text-[#737373] text-sm">We focus on ergonomics and<br />
                                    meeting you where you work. It's<br />
                                    only a keystroke away.
                                </p>
                                <div className="flex items-center gap-[0.625rem]">
                                    <Download className="w-[1rem] h-[1rem] text-[#737373]" />
                                    <h6 className="font-montserrat font-bold text-[#737373] text-sm">15 Sales</h6>
                                </div>
                                <div className="flex py-[0.3125rem] px-[0.1875rem] gap-[0.3125rem]">
                                    <h5 className="font-montserrat font-bold text-[#BDBDBD] text-base">$16.48</h5>
                                    <h5 className="font-montserrat font-bold text-[#23856D] text-base">$6.48</h5>
                                </div>
                                <div className="flex gap-[0.38rem]">
                                    <div className="w-[1rem] h-[1rem] bg-[#23A6F0] rounded-full"></div>
                                    <div className="w-[1rem] h-[1rem] bg-[#23856D] rounded-full"></div>
                                    <div className="w-[1rem] h-[1rem] bg-[#E77C40] rounded-full"></div>
                                    <div className="w-[1rem] h-[1rem] bg-[#252B42] rounded-full"></div>
                                </div>
                                <div className="flex py-[0.9375rem] justify-between gap-2">
                                    <div className="flex gap-[0.3125rem]">
                                        <Clock className="w-[1rem] h-[1rem] text-[#23A6F0]" />
                                        <p className="font-montserrat font-normal text-[#737373] text-sm">22h...</p>
                                    </div>
                                    <div className="flex gap-[0.3125rem]">
                                        <ChartGantt className="w-[1rem] h-[1rem] text-[#E77C40]" />
                                        <p className="font-montserrat font-normal text-[#737373] text-sm">64 Lessons</p>
                                    </div>
                                    <div className="flex gap-[0.3125rem]">
                                        <ChartNoAxesCombined className="w-[1rem] h-[1rem] text-[#23856D]" />
                                        <p className="font-montserrat font-normal text-[#737373] text-sm">Progress</p>
                                    </div>
                                </div>
                                <button className="w-[8.82125rem] h-[2.75rem] rounded-[2.3125rem] border border-[#23A6F0] py-[0.625rem] px-[1.25rem]
                                        font-montserrat font-bold text-sm text-[#23A6F0] flex items-center justify-center">
                                    Learn More <ChevronRight className="w-[1rem] h-[1rem] text-[#23A6F0]" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block md:hidden py-20 px-5 flex flex-col gap-6">
                <div className="flex flex-col items-center gap-[0.625rem] pb-14 md:pb-0">
                    <h6 className="font-montserrat font-bold text-[#23A6F0] text-sm">Practice Advice</h6>
                    <h2 className="font-montserrat font-bold text-[#252B42] text-[2.5rem]">Featured Posts</h2>
                </div>
                <div className="flex flex-col">
                    <div className="bg-mobile-posts-1 bg-cover w-full h-[18.75rem] flex items-start">
                        <h6 className="w-[3.5rem] h-[1.5rem] border rounded-[0.1875rem] px-[0.625rem] bg-[#E74040] border-[#E74040] mt-4 ml-4
                                    font-montserrat font-bold text-[#FFFFFF] text-sm">NEW</h6>
                    </div>
                    <div className="flex flex-col pt-[1.5625rem] pb-[2.1875rem] px-[1.5625rem] gap-[0.625rem] bg-gray-50 border border-slate-100 rounded-br-sm rounded-bl-sm">
                        <div className="flex gap-[0.9375rem]">
                            <h6 className="font-montserrat font-normal text-[#8EC2F2] text-xs">Google</h6>
                            <h6 className="font-montserrat font-normal text-[#BDBDBD] text-xs">Trending</h6>
                            <h6 className="font-montserrat font-normal text-[#BDBDBD] text-xs">New</h6>
                        </div>
                        <h4 className="font-montserrat font-normal text-[#252B42] text-xl">Loudest à la Madison #1 <br />
                            (L'integral)</h4>
                        <p className="font-montserrat font-normal text-[#737373] text-sm">We focus on ergonomics and meeting <br />
                            you where you work. It's only a <br />
                            keystroke away.</p>
                        <div className="flex justify-between">
                            <div className="flex gap-[0.3125rem] items-center">
                                <Clock className="w-[1rem] h-[1rem] text-[#23A6F0]" />
                                <p className="font-montserrat font-normal text-[#737373] text-xs">22 April 2021</p>
                            </div>
                            <div className="flex gap-[0.3125rem] items-center py-[0.9375rem]">
                                <ChartNoAxesCombined className="w-[1rem] h-[1rem] text-[#23856D]" />
                                <p className="font-montserrat font-normal text-[#737373] text-xs">10 comments</p>
                            </div>
                        </div>
                        <button className="font-montserrat font-bold text-sm text-[#737373] flex items-center">
                            Learn More <ChevronRight className="w-[1rem] h-[1rem] text-[#23A6F0]" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="bg-mobile-posts-2 bg-cover w-full h-[18.75rem] flex items-start">
                        <h6 className="w-[3.5rem] h-[1.5rem] border rounded-[0.1875rem] px-[0.625rem] bg-[#E74040] border-[#E74040] mt-4 ml-4
                                    font-montserrat font-bold text-[#FFFFFF] text-sm">NEW</h6>
                    </div>
                    <div className="flex flex-col pt-[1.5625rem] pb-[2.1875rem] px-[1.5625rem] gap-[0.625rem] bg-gray-50 border border-slate-100 rounded-br-sm rounded-bl-sm">
                        <div className="flex gap-[0.9375rem]">
                            <h6 className="font-montserrat font-normal text-[#8EC2F2] text-xs">Google</h6>
                            <h6 className="font-montserrat font-normal text-[#BDBDBD] text-xs">Trending</h6>
                            <h6 className="font-montserrat font-normal text-[#BDBDBD] text-xs">New</h6>
                        </div>
                        <h4 className="font-montserrat font-normal text-[#252B42] text-xl">Loudest à la Madison #1 <br />
                            (L'integral)</h4>
                        <p className="font-montserrat font-normal text-[#737373] text-sm">We focus on ergonomics and meeting <br />
                            you where you work. It's only a <br />
                            keystroke away.</p>
                        <div className="flex justify-between">
                            <div className="flex gap-[0.3125rem] items-center">
                                <Clock className="w-[1rem] h-[1rem] text-[#23A6F0]" />
                                <p className="font-montserrat font-normal text-[#737373] text-xs">22 April 2021</p>
                            </div>
                            <div className="flex gap-[0.3125rem] items-center py-[0.9375rem]">
                                <ChartNoAxesCombined className="w-[1rem] h-[1rem] text-[#23856D]" />
                                <p className="font-montserrat font-normal text-[#737373] text-xs">10 comments</p>
                            </div>
                        </div>
                        <button className="font-montserrat font-bold text-sm text-[#737373] flex items-center">
                            Learn More <ChevronRight className="w-[1rem] h-[1rem] text-[#23A6F0]" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Posts;