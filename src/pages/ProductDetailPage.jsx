import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../Redux/store/actions/productActions";
import ProductBestsellerCard from "../components/ProductDetailPage/ProductBestsellerCard";
import ProductCard from "../components/ProductDetailPage/ProductCard";
import ProductDescription from "../components/ProductDetailPage/ProductDescription";
import Brands from "../layout/Brands";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

function ProductDetailPage() {
    const { productId } = useParams();
    const dispatch = useDispatch();

    const productDetail = useSelector((state) =>
        state.product.productList.find((p) => p.id === Number(productId))
    );

    useEffect(() => {
        if (!productDetail && productId) {
            dispatch(fetchProductById(productId));
        }
    }, [dispatch, productDetail, productId]);

    if (!productDetail) {
        return (
            <div className="flex justify-center items-center h-[300px]">
                <div className="w-8 h-8 border-4 border-gray-300 border-t-[#23A6F0] rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <>
            <Header />
            <ProductCard productDetail={productDetail} />
            <ProductDescription productDetail={productDetail} />
            <ProductBestsellerCard />
            <Brands />
            <Footer />
        </>
    );
}

export default ProductDetailPage;