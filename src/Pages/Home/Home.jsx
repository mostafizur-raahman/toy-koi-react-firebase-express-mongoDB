
import { useEffect } from "react";
import Galary from "../../Gallary/Galary";
import Banner from "./Banner/Banner";
import ShopByCategory from "./ShopBycategory/ShopByCategory";
import Aos from "aos";
import 'aos/dist/aos.css'
import Reviews from "../../Reviews/Reviews";
import OurReviews from "../../OurReviews/OurReviews";

const Home = () => {

    useEffect(() => {
        Aos.init();
        document.title = 'Toy KOi | Home'
    }, [])
    return (
        <div>
            {/* banner */}
            <Banner></Banner>
            <Galary></Galary>
            {/* shop by category */}
            <ShopByCategory></ShopByCategory>
            {/* reviews */}
            <Reviews></Reviews>
            <OurReviews></OurReviews>
        </div>
    );
};

export default Home;