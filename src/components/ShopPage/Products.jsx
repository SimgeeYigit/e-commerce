import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/store/actions/productActions";

function Products({ showColumns, categoryId, sort }) {
    const products = useSelector(state => state.product.productList);
    const filter = useSelector(state => state.product.filter);
    const dispatch = useDispatch();

    useEffect(() => {
        if (categoryId) {
            dispatch(fetchProducts(categoryId, sort));
        } else {
            dispatch(fetchProducts('', sort));
        }
    }, [dispatch, categoryId, sort]);

    const groupedProducts = [];
    for (let i = 0; i < products.length; i += 4) {
        groupedProducts.push(products.slice(i, i + 4));
    }

    return (
        <>
            <div className="py-12">
                <div className="font-montserrat flex flex-col gap-[48px]">
                    {groupedProducts.map((products, groupIndex) => (
                        <div key={groupIndex} className={`flex flex-wrap justify-center gap-[30px] ${showColumns ? "flex-col items-center" : "flex-row"}`}>
                            {products.map((product, index) => (
                                <div key={index} className="w-[239px] hover:shadow-lg cursor-pointer">
                                    <img src={product.images[0].url} alt={`product-${groupIndex * 4 + index + 1}`} className="w-[239px] h-[300px] object-cover" />
                                    <div className="flex flex-col pt-[25px] pb-[35px] px-[25px] items-center gap-[10px] text-center">
                                        <h5 className="font-bold text-[#252B42] text-base">{product.name}</h5>
                                        <p className="font-bold text-sm text-[#737373]">{product.description}</p>
                                        <div className="flex font-bold text-base gap-2 mt-2">
                                            <p className="text-[#23856D]">${product.price}</p>
                                        </div>
                                        <div className="flex gap-[0.38rem]">
                                            <div className="w-4 h-4 bg-[#23A6F0] rounded-full"></div>
                                            <div className="w-4 h-4 bg-[#23856D] rounded-full"></div>
                                            <div className="w-4 h-4 bg-[#E77C40] rounded-full"></div>
                                            <div className="w-4 h-4 bg-[#23856D] rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div>

            </div>
        </>
    );
}

export default Products;