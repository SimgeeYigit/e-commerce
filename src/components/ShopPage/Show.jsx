import { TableOfContents, LayoutGrid, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setFilter } from "../../Redux/store/actions/productActions";

function Show({ showColumns, setShowColumns, sort, setSort }) {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.productList);
    const filter = useSelector(state => state.product.filter);
    const [searchInput, setSearchInput] = useState(filter || "");

    const sortProducts = [
        { value: "none", label: "Default" },
        { value: "price:asc", label: "Sort by price: Low to High" },
        { value: "price:desc", label: "Sort by price: High to Low" },
        { value: "rating:asc", label: "Sort by rating: Low to High" },
        { value: "rating:desc", label: "Sort by rating: High to Low" }
    ];

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleChange = (e) => setSearchInput(e.target.value);

    const handleSearch = () => {
        dispatch(setFilter(searchInput));
        dispatch(fetchProducts());
    };

    return (
        <div className="font-montserrat flex items-center justify-between py-6 px-0 md:px-[180px] md:flex-row flex-col gap-6">
            <h6 className="font-bold text-sm text-[#737373]">Showing all {products.length} results</h6>
            <div className="flex gap-[15px] items-center">
                <h6 className="font-bold text-sm text-[#737373]">Views:</h6>
                <button
                    onClick={() => setShowColumns(false)}
                    className={`border rounded-[5px] border-[#ECECEC] p-[15px] 
                    ${!showColumns ? "text-[#252B42]" : "text-[#737373]"}`}><LayoutGrid className="w-4 h-4" /></button>
                <button
                    onClick={() => setShowColumns(true)}
                    className={`border rounded-[5px] border-[#ECECEC] p-[15px] 
                    ${showColumns ? "text-[#252B42]" : "text-[#737373]"}`}><TableOfContents className="w-4 h-4 rotate-180" /></button>
            </div>
            <div className="flex gap-[10px] items-center">
                <input
                    type="text"
                    className="border rounded-[5px] p-[10px] text-sm h-[50px] text-[#737373]"
                    onChange={handleChange}
                    placeholder="Search products..." />
                <div className="w-auto h-[50px] flex items-center justify-center border rounded-[5px] gap-2 text-[#737373]">
                    <select
                        className="text-sm mx-2"
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}>
                        {sortProducts.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    onClick={handleSearch}
                    className="w-[94px] h-[50px] flex items-center justify-center bg-[#23A6F0] border rounded-[5px] font-bold text-sm text-[#FFFFFF] m-0 cursor-pointer">
                    Filter
                </button>
            </div>
        </div>
    );
}
export default Show;