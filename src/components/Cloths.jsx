import { ChevronRight } from "lucide-react";
import { useHistory } from "react-router-dom";

function Cloths() {
  const bgList = ["bg-cloths-1", "bg-cloths-2", "bg-cloths-3", "bg-cloths-4", "bg-cloths-5"];
  const history = useHistory();

  return (
    <>
      <div className="flex font-montserrat font-bold justify-between items-center py-6 bg-[#FAFAFA] px-[9.876rem] md:flex-row flex-col">
        <h3 className="text-2xl text-[#252B42]">Shop</h3>
        <div className="flex items-center gap-2">
          <button onClick={() => { history.push("/") }} className="text-sm text-[#252B42]">Home</button>
          <ChevronRight className="text-[#BDBDBD]" />
          <span className="text-sm text-[#BDBDBD]">Shop</span>
        </div>
      </div>
      <div className="flex justify-center gap-4 pb-12 md:flex-row flex-col">
        {bgList.map((bg, index) => (
          <div
            key={index}
            className={`w-[206px] h-[223px] ${bg} bg-cover bg-center flex items-center justify-center bg-black/40 bg-blend-darken`}
          >
            <div className="font-montserrat text-[#FFFFFF] text-center flex flex-col gap-2 drop-shadow-2xl">
              <h5 className="font-bold font-base">CLOTHS</h5>
              <p className="font-normal font-sm">5 Items</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cloths;