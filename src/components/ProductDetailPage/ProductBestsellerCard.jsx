import one from "/assets/productdetailpage/BestsellerCard/1.jpg";
import two from "/assets/productdetailpage/BestsellerCard/2.jpg";
import three from "/assets/productdetailpage/BestsellerCard/3.jpg";
import four from "/assets/productdetailpage/BestsellerCard/4.jpg";
import five from "/assets/productdetailpage/BestsellerCard/5.jpg";
import six from "/assets/productdetailpage/BestsellerCard/6.jpg";
import seven from "/assets/productdetailpage/BestsellerCard/7.jpg";
import eight from "/assets/productdetailpage/BestsellerCard/8.jpg";

function ProductBestsellerCard() {
    const bestsellers = [
        { id: 1, image: one, title: "Graphic Design", secondTitle: "English Department", price: "$16.48", secondPrice: "$6.48" },
        { id: 2, image: two, title: "Graphic Design", secondTitle: "English Department", price: "$16.48", secondPrice: "$6.48" },
        { id: 3, image: three, title: "Graphic Design", secondTitle: "English Department", price: "$16.48", secondPrice: "$6.48" },
        { id: 4, image: four, title: "Graphic Design", secondTitle: "English Department", price: "$16.48", secondPrice: "$6.48" },
        { id: 5, image: five, title: "Graphic Design", secondTitle: "English Department", price: "$16.48", secondPrice: "$6.48" },
        { id: 6, image: six, title: "Graphic Design", secondTitle: "English Department", price: "$16.48", secondPrice: "$6.48" },
        { id: 7, image: seven, title: "Graphic Design", secondTitle: "English Department", price: "$16.48", secondPrice: "$6.48" },
        { id: 8, image: eight, title: "Graphic Design", secondTitle: "English Department", price: "$16.48", secondPrice: "$6.48" },
    ];

    const groupedProducts = [];
    for (let i = 0; i < bestsellers.length; i += 4) {
        groupedProducts.push(bestsellers.slice(i, i + 4));
    }

    return (
        <div className="font-montserrat bg-[#FAFAFA] md:px-[220px] py-12 px-8">
            <h3 className="font-bold text-2xl border-b border-[#ECECEC] border-b-[2px] pb-8 text-center md:text-left">BESTSELLER PRODUCTS</h3>
            <div className="flex flex-col gap-6 pt-6">
                {groupedProducts.map((group, index) => (
                    <div key={index} className="flex md:flex-row flex-col gap-[30px] justify-center md:justify-between">
                        {group.map((product) => (
                            <div key={product.id} className="bg-[#FFFFFF]">
                                <img src={product.image} alt={product.title} className="w-full h-auto" />
                                <div className="flex flex-col px-[25px] pt-[25px] pb-[35px] gap-[10px]">
                                    <h5 className="font-bold text-base text-[#252B42]">{product.title}</h5>
                                    <h5 className="font-bold text-[#737373] text-sm">{product.secondTitle}</h5>
                                    <div className="flex gap-[5px] py-[5px] px-[3px]">
                                        <h5 className="font-bold text-base text-[#BDBDBD]">{product.price}</h5>
                                        <h5 className="font-bold text-base text-[#23856D]">{product.secondPrice}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ProductBestsellerCard;