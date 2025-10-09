import { ChevronRight } from "lucide-react";
import { useHistory, useParams } from "react-router-dom";
import { Star, Heart, ShoppingCart, Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../Redux/store/actions/productActions";
import { addCartItem } from "../../Redux/store/actions/shoppingCartActions";

function ProductCard({ productDetail }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [mainImage, setMainImage] = useState("");

    useEffect(() => {
        if (productDetail?.images?.length) {
            setMainImage(productDetail.images[0].url);
        }
    }, [productDetail]);

    const handleAddToCart = () => {
        dispatch(addCartItem(productDetail));
    };

    return (
        <div className="font-montserrat px-10 md:px-[200px] bg-[#FAFAFA] pb-12">
            <div className="flex items-center justify-center md:justify-start gap-2 pt-8 pb-20 md:py-6">
                <button onClick={() => history.goBack()}
                className="border border-[#23A6F0] py-[10px] px-[20px] rounded-[5px] bg-[#23A6F0] font-bold text-sm text-[#FFFFFF] mr-8">Back</button>
                <button onClick={() => { history.push("/") }} className="font-bold text-sm text-[#252B42]">Home</button>
                <ChevronRight className="text-[#BDBDBD]" />
                <span className="text-sm text-[#BDBDBD] cursor-pointer" onClick={() => { history.push("/shop") }}>Shop</span>
            </div>
            <div className="flex gap-[40px] md:flex-row flex-col">
                <div className="flex flex-col gap-[40px] md:gap-[10px]">
                    <img src={mainImage} alt="Product" className="md:w-[506px] h-auto w-[348px] object-cover" />
                    <div className="flex gap-[10px]">
                        {productDetail.images.map((img, index) => (
                            <img
                                key={index}
                                src={img.url}
                                alt={`Product ${index}`}
                                className="w-[100px] h-[75px] object-cover cursor-pointer opacity-50 hover:opacity-100"
                                onClick={() => setMainImage(img.url)}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-[20px] w-full md:w-[50%] px-2 md:px-0">
                    <h4 className="flex-normal text-xl text-[#252B42]">{productDetail.name}</h4>
                    <div className="flex gap-[10px] items-center">
                        <div className="flex">
                            <Star fill="#F3CD03" className="w-4 h-4 text-[#F3CD03]" />
                            <Star fill="#F3CD03" className="w-4 h-4 text-[#F3CD03]" />
                            <Star fill="#F3CD03" className="w-4 h-4 text-[#F3CD03]" />
                            <Star fill="#F3CD03" className="w-4 h-4 text-[#F3CD03]" />
                            <Star className="w-4 h-4 text-[#F3CD03]" />
                        </div>
                        <h6 className="font-bold text-sm text-[#737373]">10 Reviews</h6>
                    </div>
                    <h3 className="font-bold text-2xl text-[#252B42]">${productDetail.price}</h3>
                    <h6 className="font-bold text-[#737373] text-sm">Availability  : <span className="text-[#23A6F0]">{productDetail.stock > 0 ? `In Stock (${productDetail.stock})` : "Out of Stock"}</span></h6>
                    <p className="font-normal text-[#858585] text-sm">{productDetail.description}</p>
                    <hr className="text-[#BDBDBD]" />
                    <div className="flex gap-[0.38rem]">
                        <div className="w-[30px] h-[30px] bg-[#23A6F0] rounded-full"></div>
                        <div className="w-[30px] h-[30px] bg-[#2DC071] rounded-full"></div>
                        <div className="w-[30px] h-[30px] bg-[#E77C40] rounded-full"></div>
                        <div className="w-[30px] h-[30px] bg-[#252B42] rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-[10px] pt-10">
                        <button className="border border-[#23A6F0] py-[10px] px-[20px] rounded-[5px] bg-[#23A6F0] font-bold text-sm text-[#FFFFFF]">Select Options</button>
                        <div className="flex gap-2">
                            <div className="p-2 bg-white border border-[#BDBDBD] rounded-full">
                                <Heart className="w-4 h-4 text-[#252B42]" />
                            </div>
                            <div className="p-2 bg-white border border-[#BDBDBD] rounded-full">
                                <ShoppingCart 
                                onClick={handleAddToCart}
                                className="w-4 h-4 text-[#252B42] cursor-pointer hover:text-[#23A6F0]" />
                            </div>
                            <div className="p-2 bg-white border border-[#BDBDBD] rounded-full">
                                <Eye className="w-4 h-4 text-[#252B42]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductCard;