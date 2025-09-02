import Header from "../layout/Header";
import Banner from "../components/Banner";
import Brands from "../layout/Brands";
import Explore from "../components/Explore";
import Products from "../components/Products";
import Featured from "../components/Featured";
import Service from "../components/Service";

function HomePage() {
    return (
        <>
            <Header />
            <Banner />
            <Brands />
            <Explore />
            <Products />
            <Featured />
            <Service />
        </>
    )
}

export default HomePage;