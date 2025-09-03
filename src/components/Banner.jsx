import HomeBanner from "../assets/homepage/home-banner.svg";

function Banner() {
    return (
        <div className="flex h-[619px] mx-[74px] rounded-[20px] bg-[linear-gradient(90deg,#96E9FB_0%,#ABECD6_100%)] mr-32 mt-[25px]">
            
            <div className="flex flex-col justify-center gap-[30px] flex-1 p-10">
                <p className="font-montserrat font-bold text-base text-[#2A7CC7]
                              opacity-0 translate-x-20 animate-fadeLeft">
                    SUMMER 2020
                </p>

                <h1 className="font-montserrat font-bold text-5xl text-[#252B42]
                opacity-0 translate-x-20 animate-fadeLeft animation-delay-600">
                    NEW COLLECTION
                </h1>
                <p className="font-montserrat font-normal text-xl text-[#737373]
                opacity-0 translate-x-20 animate-fadeLeft animation-delay-1200">
                    We know how large objects will act, <br />
                    but things on a small scale.
                </p>
                <button className="w-[221px] h-[62px] rounded-[5px] py-[15px] px-10 bg-[#23A6F0] text-montserrat 
                font-bold text-2xl text-[#FFFFFF] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:bg-indigo-500
                opacity-0 translate-x-20 animate-fadeLeft animation-delay-1800">
                    SHOP NOW
                </button>
            </div>

            <div className="flex-1 flex items-end justify-end ">
                <img
                    src={HomeBanner}
                    alt="home-banner"
                    className="mr-[-85px] h-full max-w-none object-cover"
                />
            </div>
        </div>
    );
}

export default Banner;
