import one from "../assets/homepage/featured/1.svg";
import two from "../assets/homepage/featured/2.svg";

function Featured() {
    return (
        <div className="flex items-center justify-center mx-[9.876rem] py-20">
            <div className="flex gap-4 w-1/2">
                <img src={two} alt="Featured Product 1" />
                <img src={one} alt="Featured Product 2" />
            </div>
            <div className="flex flex-col gap-4 pl-10">
                <h5 className="font-montserrat font-bold text-[#23A6F0] text-base">Featured Products</h5>
                <h2 className="font-montserrat font-bold text-[#252B42] text-[2.5rem]">We love what we do</h2>
                <p className="font-montserrat font-normal text-[#737373] text-sm">Problems trying to resolve the conflict between<br />
                    the two major realms of Classical physics:<br />
                    Newtonian mechanics.
                    <br /> <br/>
                    Problems trying to resolve the conflict between<br />
                    the two major realms of Classical physics:<br />
                    Newtonian mechanics </p>
            </div>
        </div>
    );
}

export default Featured;