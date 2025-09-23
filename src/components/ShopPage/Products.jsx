import one from "../../assets/shoppage/products/1.jpg";
import two from "../../assets/shoppage/products/2.jpg";
import three from "../../assets/shoppage/products/3.jpg";
import four from "../../assets/shoppage/products/4.jpg";
import five from "../../assets/shoppage/products/5.jpg";
import six from "../../assets/shoppage/products/6.jpg";
import seven from "../../assets/shoppage/products/7.jpg";
import eight from "../../assets/shoppage/products/8.jpg";
import nine from "../../assets/shoppage/products/9.jpg";
import ten from "../../assets/shoppage/products/10.jpg";
import eleven from "../../assets/shoppage/products/11.jpg";
import twelve from "../../assets/shoppage/products/12.jpg";
import { useState } from "react";

function Products({ showColumns }) {
    const [productsImg, setProductsImg] = useState([
        one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve
    ]);
    const header = "Graphic Design";
    const subHeader = "English Department";
    const price = "$16.48";
    const secondPrice = "$6.48";

    const groupedProducts = [];
    for (let i = 0; i < productsImg.length; i += 4) {
        groupedProducts.push(productsImg.slice(i, i + 4));
    }

    return (
        <>
            <div className="py-12">
                <div className="font-montserrat flex flex-col gap-[48px]">
                    {groupedProducts.map((group, groupIndex) => (
                        <div key={groupIndex} className={`flex flex-wrap justify-center gap-[30px] ${showColumns ? "flex-col items-center" : "flex-row"}`}>
                            {group.map((img, index) => (
                                <div key={index} className="w-[239px]">
                                    <img src={img} alt={`product-${groupIndex * 4 + index + 1}`} className="w-[239px] h-[300px]" />
                                    <div className="flex flex-col pt-[25px] pb-[35px] px-[25px] items-center gap-[10px]">
                                        <h5 className="font-bold text-[#252B42] text-base">{header}</h5>
                                        <p className="font-bold text-sm text-[#737373]">{subHeader}</p>
                                        <div className="flex font-bold text-base gap-2 mt-2">
                                            <p className="text-[#BDBDBD]">{price}</p>
                                            <p className="text-[#23856D]">{secondPrice}</p>
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