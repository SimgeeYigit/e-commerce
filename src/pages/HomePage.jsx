import Header from "../layout/Header";
import Banner from "../components/Banner";
import Brands from "../layout/Brands";
import Explore from "../components/Explore";
import Products from "../components/Products";

function HomePage() {
    return (
        <>
            <Header />
            <Banner />
            <Brands />
            <Explore />
            <Products />
        </>
    )
}

export default HomePage;