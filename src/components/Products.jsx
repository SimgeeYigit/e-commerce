import one from "../assets/homepage/products/1.jpg";
import two from "../assets/homepage/products/2.jpg";
import three from "../assets/homepage/products/3.jpg";
import four from "../assets/homepage/products/4.jpg";
import five from "../assets/homepage/products/5.jpg";
import six from "../assets/homepage/products/6.jpg";
import seven from "../assets/homepage/products/7.jpg";
import eight from "../assets/homepage/products/8.jpg";
import nine from "../assets/homepage/products/9.jpg";
import ten from "../assets/homepage/products/10.jpg";
import { useState } from "react";

function Products() {
    const header = "Graphic Design";
    const subHeader = "English Department";
    const price = "$16.48";
    const secondPrice = "$6.48";
    const [products, setProducts] = useState([one, two, three, four, five, six, seven, eight, nine, ten]);

    return (
        <div className="py-20 flex flex-col md:mx-[9.876rem] mx-0 gap-6 md:gap-0">
            <div className="flex flex-col justify-center items-center gap-2.5 py-12 md:py-8 px-10 text-center">
                <h4 className="font-montserrat font-normal text-[#737373] text-xl">Featured Products</h4>
                <h3 className="font-montserrat font-bold text-[#252B42] text-2xl">BESTSELLER PRODUCTS</h3>
                <p className="font-montserrat font-normal text-[#737373] text-sm px-4 md:px-0">Problems trying to resolve the conflict between</p>
            </div>

            <div className="flex flex-wrap justify-center p-0 md:p-6">
                {products.map((product, index) => (
                    <div
                        className="flex flex-col items-center flex-grow xl:w-1/5"
                    >
                        <img
                            src={product}
                            alt={`Product ${index + 1}`}
                            className="w-[11.4375rem] h-[14.875rem]"
                        />
                        <div className="flex flex-col pt-[1.5625rem] gap-[0.625rem] items-center pb-[2.1875rem] px-[1.5625rem]">
                            <h4 className="font-montserrat font-bold text-[#252B42] text-base">{header}</h4>
                            <h5 className="font-montserrat font-bold text-[#737373] text-sm">{subHeader}</h5>
                            <div className="flex gap-[0.3125rem]">
                                <p className="font-montserrat font-bold text-[#BDBDBD] text-base">{price}</p>
                                <p className="font-montserrat font-bold text-[#23856D] text-base">{secondPrice}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <button className="w-[17rem] h-[3.25rem] border rounded-[0.3125rem] py-[0.9375rem] px-10 border-[#23A6F0]
                    text-[#23A6F0] font-montserrat text-sm font-bold">
                    LOAD MORE PRODUCTS
                </button>
            </div>
        </div>
    );
}

export default Products;