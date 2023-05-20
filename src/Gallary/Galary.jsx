import { useEffect } from "react";
import './Gallary.css'
import Aos from "aos";
import 'aos/dist/aos.css'
const Galary = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className="ml-10 OVERFLOW">
            <h1 className="text-4xl text-center mt-5 font-bold text-pink-500"> Image Gallary</h1>
            <div className="grid gap-5 mt-10 lg:grid-cols-2 ">
                <div data-aos='fade-right'>
                    <img src="https://i.ibb.co/yYC8WwH/e1.jpg" className="border-2 w-[500px] h-[400px] rounded-lg" alt="" />
                </div>
                <div data-aos='fade-left'>
                    <img src="https://i.ibb.co/XbZp8RZ/doll2.jpg" className="border-2 w-[500px] h-[400px]" alt="" />
                </div>
                <div data-aos='fade-right'>
                    <img src="https://i.ibb.co/5j2Hnr5/animals3.jpg" className="border-2 w-[500px] h-[400px]" alt="" />
                </div>
                <div data-aos='fade-left'>
                    <img src="https://i.ibb.co/4K8JtTq/e3.jpg" className="border-2 w-[500px] h-[400px]" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Galary;