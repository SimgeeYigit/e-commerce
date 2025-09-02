import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function ShopDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <li className="relative" ref={dropdownRef}>
      <div
        className="flex items-center gap-1 cursor-pointer text-[#252B42] font-medium"
        onClick={() => setOpen(!open)}
      >
        Shop {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </div>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-[396px] bg-white shadow-lg flex p-4 gap-8 rounded-lg">
          {/* Women */}
          <div className="flex-1 flex flex-col gap-2">
            <h3 className="font-montserrat font-bold text-sm my-4 text-[#252B42] mx-7">Women</h3>
            <ul className="font-montserrat text-[#737373] text-sm flex flex-col gap-4 mx-7">
              <li>Bags</li>
              <li>Belts</li>
              <li>Cosmetics</li>
              <li>Shoes</li>
              <li>Hats</li>
            </ul>
          </div>

          {/* Man */}
          <div className="flex-1 flex flex-col gap-2">
            <h3 className="font-montserrat font-bold text-sm my-4 text-[#252B42] mx-7">Man</h3>
            <ul className="font-montserrat text-[#737373] text-sm flex flex-col gap-4 mx-7">
              <li>Bags</li>
              <li>Belts</li>
              <li>Cosmetics</li>
              <li>Shoes</li>
              <li>Hats</li>
            </ul>
          </div>
        </div>
      )}

    </li>
  );
}

export default ShopDropdown;
