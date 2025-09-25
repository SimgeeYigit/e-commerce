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

    return (
        <div>
            <Header />
            <Cloths />
            <Show showColumns={showColumns} setShowColumns={setShowColumns} />
            <Products showColumns={showColumns} />
            <Pagination />
            <Brands padding = "py-12 md:py-[50px]"/>
            <Footer />
        </div>
    );
}

export default ShopPage;