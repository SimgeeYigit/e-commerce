import one from "../assets/homepage/featured/1.svg";
import two from "../assets/homepage/featured/2.svg";

function Featured() {
    return (
        <div className="flex flex-col-reverse items-center justify-center mx-0 md:mx-[9.876rem] py-20 md:flex-row gap-[3.125rem]">
            <div className="flex gap-4 md:w-1/2 md:justify-start justify-center">
                <img src={two} alt="Featured Product 1" className="w-1/3 h-auto object-cover md:w-auto" />
                <img src={one} alt="Featured Product 2" className="w-1/2 h-auto object-cover md:w-auto" />
            </div>
            <div className="flex flex-col gap-4 pr-3 md:pl-10 md:pr-0">
                <h5 className="font-montserrat font-bold text-[#23A6F0] text-base">Featured Products</h5>
                <h2 className="font-montserrat font-bold text-[#252B42] text-[2.5rem]">We love <br className="block md:hidden" />what we do</h2>
                <p className="font-montserrat font-normal text-[#737373] text-sm hidden md:block">Problems trying to resolve the <br className="block md:hidden" />conflict between<br />
                    the two major realms of Classical physics:<br />
                    Newtonian mechanics.
                    <br /> <br />
                    Problems trying to resolve the conflict between<br />
                    the two major realms of Classical physics:<br />
                    Newtonian mechanics </p>

                <p className="font-montserrat font-normal text-[#737373] text-sm block md:hidden">Problems trying to resolve the <br />
                        conflict between the two major<br />
                        realms of Classical physics:<br />
                        Newtonian mechanics.
                        <br /> <br />
                        Problems trying to resolve the <br />
                        conflict between the two major<br />
                        realms of Classical physics:<br />
                        Newtonian mechanics. </p>
            </div>
        </div>
    );
}

export default Featured;