import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../Redux/store/actions/productActions";
import { Link } from "react-router-dom";

function ShopDropdown() {
  const categories = useSelector(state => state.product.categories);
  const womenCategories = categories.filter(w => w.gender === "k");
  const menCategories = categories.filter(m => m.gender === "e");

  const dispatch = useDispatch();
  const history = useHistory();
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

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch])

  return (
    <li className="relative" ref={dropdownRef}>
      <div
        className="flex items-center gap-1 cursor-pointer text-[#252B42] font-medium"
        onClick={() => setOpen(!open)}
      >
        <span
          className="hover:underline"
          onClick={() => {
            history.push("/shop");
          }}>Shop</span> {open ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
      </div>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-[396px] bg-white shadow-lg flex p-4 gap-8 rounded-lg z-50">
          {/* Women */}
          <div className="flex-1 flex flex-col gap-2">
            <h3 className="font-montserrat font-bold text-sm my-4 text-[#252B42] mx-7">Kadın</h3>
            <ul className="font-montserrat text-[#737373] text-sm flex flex-col gap-4 mx-7">
              {womenCategories.map(w => {
                const [genderCode, code] = w.code.split(':');
                return (
                  <li key={w.id}>
                    <Link to={`/shop/kadin/${code}/${w.id}`}>
                      {w.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Man */}
          <div className="flex-1 flex flex-col gap-2">
            <h3 className="font-montserrat font-bold text-sm my-4 text-[#252B42] mx-7">Erkek</h3>
            <ul className="font-montserrat text-[#737373] text-sm flex flex-col gap-4 mx-7">
              {menCategories.map(m => {
                const [genderCode, code] = m.code.split(':');
                return (
                  <li key={m.id}>
                    <Link to={`/shop/erkek/${code}/${m.id}`}>
                      {m.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )}

    </li>
  );
}

export default ShopDropdown;
