import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import './OurReview.css'
const OurReviews = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className="OVERFLOW">
            <h1 className="text-5xl font-bold text-pink-500 text-center mt-10 mb-10">Customer Review</h1>

            <div className="lg:flex grid justify-between">
                <div data-aos='fade-right' className="w-[300px]">
                    <img src="https://i.ibb.co/Bjn4CqJ/1.jpg" className="h-[200px] w-[200px] rounded-full" alt="review" />
                    <p className="font-bold">I purches a lot.just love this website.and i still recommend to buy somethink in that website.</p>
                </div>
                <div data-aos='fade-left' className="w-[300px]">
                    <img src="https://i.ibb.co/j3TgyBr/2.jpg" className="h-[200px] w-[200px] rounded-full" alt="review" />
                    <p className="font-bold">Good Products.I purches a lot.just love this website.and i still recommend to buy somethink in that website.</p>
                </div>
                <div data-aos='fade-right' className="w-[300px]">
                    <img src="https://i.ibb.co/f0bxNpW/3.jpg" className="h-[200px] w-[200px] rounded-full" alt="review" />
                    <p className="font-bold">very very very Good Products.enjoy the services ,out of the world. world class</p>
                </div>
            </div>
        </div>
    );
};

export default OurReviews;