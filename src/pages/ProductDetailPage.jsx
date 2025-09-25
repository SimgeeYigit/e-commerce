import ProductBestsellerCard from "../components/ProductDetailPage/ProductBestsellerCard";
import ProductCard from "../components/ProductDetailPage/ProductCard";
import ProductDescription from "../components/ProductDetailPage/ProductDescription";
import Brands from "../layout/Brands";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

function ProductDetailPage() {
    return (
        <>
            <Header />
            <ProductCard />
            <ProductDescription />
            <ProductBestsellerCard />
            <Brands />
            <Footer />
        </>
    );
}

export default ProductDetailPage;