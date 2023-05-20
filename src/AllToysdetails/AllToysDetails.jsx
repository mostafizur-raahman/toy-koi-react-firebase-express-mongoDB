import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const AllToysDetails = () => {
    const [singleData, setSingleData] = useState([])
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        document.title = 'Toy KOi | All Toys details'
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
            .then(res => res.json())
            .then(data => setSingleData(data))
    }, [])
    const toy = singleData?.find(data => data._id === id);
    console.log("aaa", toy);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={toy?.image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl mb-4 "> Toy name: <span className="font-bold text-5xl">{toy?.toyName}</span></h1>
                        <h1 className="text-3xl mb-4">seller name: <span className="font-bold text-5xl">{toy?.sellerName}</span></h1>

                        <h1 className="text-3xl mb-4">price:<span className="font-bold text-5xl">{toy?.price}</span></h1>
                        <h1 className="text-3xl mb-4"> rating: <span className="font-bold text-5xl">{toy?.rating}</span></h1>
                        <h1 className="text-3xl mb-4">available quantity: <span className="font-bold text-5xl">{toy?.quantity}</span></h1>
                        <h1 className="text-3xl mb-4">detail description: <span className="font-bold text-5xl">{toy?.subCategory}</span></h1>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllToysDetails;