import Brands from "../../layout/Brands";

function AboutClients() {
    return (
        <div className="font-montserrat flex flex-col bg-[#FAFAFA] py-20">
            <div className="flex flex-col items-center text-center gap-[30px]">
                <h2 className="font-bold text-[#252B42] text-[40px]">Big Companies Are Here</h2>
                <p className="font-normal text-sm text-[#737373]">Problems trying to resolve the conflict between<br />
                    the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <Brands />
        </div>
    );
}
export default AboutClients;