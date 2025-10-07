import Brands from "../layout/Brands";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Show from "../components/ShopPage/Show";
import Products from "../components/ShopPage/Products";
import Pagination from "../components/ShopPage/Pagination";
import { useState } from "react";
import Cloths from "../components/ShopPage/Cloths";

function ShopPage() {
    const [showColumns, setShowColumns] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [sort, setSort] = useState('');

    return (
        <div>
            <Header />
            <Cloths setSelectedCategory={setSelectedCategory}  />
            <Show showColumns={showColumns} setShowColumns={setShowColumns} sort={sort} setSort={setSort} />
            <Products showColumns={showColumns} categoryId={selectedCategory?.id} sort={sort} />
            <Pagination />
            <Brands padding="py-12 md:py-[50px]" />
            <Footer />
        </div>
    );
}

export default ShopPage;