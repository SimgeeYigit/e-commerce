import Brands from "../layout/Brands";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Cloths from "../components/ShopPage/Cloths";
import Show from "../components/ShopPage/Show";
import Products from "../components/ShopPage/Products";
import { useState } from "react";
import Pagination from "../components/ShopPage/Pagination";

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