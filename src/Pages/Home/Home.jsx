
import { useEffect } from "react";
import Galary from "../../Gallary/Galary";
import Banner from "./Banner/Banner";
import ShopByCategory from "./ShopBycategory/ShopByCategory";
import Aos from "aos";
import 'aos/dist/aos.css'
import Reviews from "../../Reviews/Reviews";

const Home = () => {

    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div>
            <Banner></Banner>
            <Galary></Galary>
            <ShopByCategory></ShopByCategory>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;