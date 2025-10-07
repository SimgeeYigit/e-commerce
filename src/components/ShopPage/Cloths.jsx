import { ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchCategories } from "../../Redux/store/actions/productActions";
import { Link } from "react-router-dom";

function Cloths({ setSelectedCategory }) {
  const categories = useSelector(state => state.product.categories)
  const top5 = [...categories].sort((a, b) => b.rating - a.rating).slice(0, 5);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch])

  return (
    <>
      <div className="flex font-montserrat font-bold justify-between gap-[30px] md:gap-0 items-center py-6 bg-[#FAFAFA] px-[180px] md:flex-row flex-col">
        <h3 className="text-2xl text-[#252B42]">Shop</h3>
        <div className="flex items-center gap-2">
          <button onClick={() => { history.push("/") }} className="text-sm text-[#252B42]">Home</button>
          <ChevronRight className="text-[#BDBDBD]" />
          <span className="text-sm text-[#BDBDBD]">Shop</span>
        </div>
      </div>
      <div className="flex justify-center gap-4 pb-12 md:flex-row flex-col items-center">
        {top5.map((category, index) => {
          const [genderCode, code] = category.code.split(':');
          const gender = category.gender === "k" ? "kadin" : "erkek"
          return (
            <Link
              key={index}
              to={`/shop/${gender}/${code}/${category.id}`}
            >
              <div
                onClick={() => setSelectedCategory(category)}
                className="w-[206px] h-[223px] bg-cover bg-center flex items-center justify-center bg-black/40 bg-blend-darken hover:bg-white cursor-pointer"
                style={{ backgroundImage: `url(${category.img})` }}
              >
                <div className="font-montserrat text-[#FFFFFF] text-center flex flex-col gap-2 drop-shadow-2xl">
                  <h5 className="font-bold font-base">
                    {category.gender === "k" ? "Kadın" : "Erkek"} {category.title}
                  </h5>
                  <p className="font-normal font-sm">5 Items</p>
                </div>
              </div>
            </Link>
          );
        })}

      </div>
    </>
  );
}
export default Cloths;