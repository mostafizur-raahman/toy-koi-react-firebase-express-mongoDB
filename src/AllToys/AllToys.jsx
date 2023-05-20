import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


const AllToys = () => {

    const [allToys, setAllToys] = useState([]);
    const [record, setRecord] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/alltoys`)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])

    console.log(allToys);

    const searchRecord = () => {
        fetch(`http://localhost:5000/alltoys/?toyName=${record}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }
    return (
        <div>
            <h1 className="text-3xl m-4 text-center font-bold">Search by name</h1>
            <div className="flex gap-4 items-center mb-5 mx-auto ">
                <div className="text-center">
                    <input onChange={(e) => setRecord(e.target.value)} type="text" placeholder="search  here" className=" text-center input input-bordered input-secondary w-full max-w-xs" />
                </div>
                <button onClick={searchRecord} className="text-3xl"> <FaSearch /> </button>

            </div>

            <div className=" overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy Image</th>
                            <th>Toy-name</th>
                            <th>Seller Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Available quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allToys.map(toy => <tr key={toy._id}>


                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={toy.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div className="font-bold">{toy.toyName}</div>
                                    </div>
                                </td>
                                <td>
                                    <h1>{toy.sellerName}</h1>
                                </td>
                                <td>
                                    <h1>{toy.subCategory}</h1>
                                </td>
                                <td>
                                    <h1>{toy.price}</h1>
                                </td>
                                <td>
                                    <h1>{toy.quantity}</h1>
                                </td>
                                <td>
                                    <h1>{toy.rating}</h1>
                                </td>

                                <td>
                                    <Link className="btn  btn-xs" to={`/allToys/${toy._id}`}>details</Link>
                                </td>
                                <td></td>
                            </tr>



                            )
                        }


                    </tbody>
                    {/* foot */}
                    {/* <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot> */}

                </table>
            </div>
        </div>
    );
};

export default AllToys;