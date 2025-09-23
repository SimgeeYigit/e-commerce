import Brands from "../layout/Brands";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Cloths from "../components/shoppage/Cloths.jsx";
import Show from "../components/shoppage/Show.jsx";
import Products from "../components/shoppage/Products.jsx";
import { useState } from "react";
import Pagination from "../components/shoppage/Pagination.jsx";

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