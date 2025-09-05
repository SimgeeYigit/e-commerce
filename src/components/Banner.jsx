import HomeBanner from "../assets/homepage/home-banner.svg";

function Banner() {
    return (
        <div className="flex flex-col md:flex-row h-auto md:h-[619px] mx-4 md:mx-[74px] rounded-[20px] bg-[linear-gradient(90deg,#96E9FB_0%,#ABECD6_100%)] mt-[25px]">

            {/* Yazılar */}
            <div className="flex flex-col justify-center gap-[30px] flex-1 p-20 md:p-10 text-center md:text-left items-center md:items-start">
                <p className="font-montserrat font-bold text-base text-[#2A7CC7]
                              md:opacity-0 md:translate-x-20 md:animate-fadeLeft">
                    SUMMER 2020
                </p>

                <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-[#252B42]
                md:opacity-0 md:translate-x-20 md:animate-fadeLeft animation-delay-600">
                    NEW COLLECTION
                </h1>
                <p className="font-montserrat font-normal text-lg md:text-xl text-[#737373]
                md:opacity-0 md:translate-x-20 md:animate-fadeLeft animation-delay-1200">
                    We know how large objects will act, <br className="hidden md:block" />
                    but things on a small scale.
                </p>
                <button className="w-[221px] h-[62px] rounded-[5px] py-[15px] px-10 bg-[#23A6F0] text-montserrat font-bold text-2xl text-[#FFFFFF] 
                transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:bg-indigo-500 md:opacity-0 md:translate-x-20 md:animate-fadeLeft animation-delay-1800"> SHOP NOW </button>
            </div>

            {/* Görsel */}
            <div className="flex-1 flex items-end justify-center md:justify-end mt-6 md:mt-0">
                <img
                    src={HomeBanner}
                    alt="home-banner"
                    className="w-[100%] max-w-[410px] h-auto md:w-auto md:h-full md:max-w-none object-cover md:mr-[-85px]"
                />
            </div>
        </div>
    );
}

export default Banner;
