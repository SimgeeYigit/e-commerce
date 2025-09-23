import Brands from "../layout/Brands";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Cloths from "../components/shoppage/Cloths";
import Show from "../components/shoppage/Show";
import Products from "../components/shoppage/Products";
import { useState } from "react";
import Pagination from "../components/shoppage/Pagination";

function ShopPage() {
    const [showColumns, setShowColumns] = useState(false);

    return (
        <div>
            <Header />
            <Cloths />
            <Show showColumns={showColumns} setShowColumns={setShowColumns} />
            <Products showColumns={showColumns} />
            <Pagination />
            <Brands />
            <Footer />
        </div>
    );
}

export default ShopPage;