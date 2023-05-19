import { useEffect, useState } from "react";


const AllToys = () => {

    const [allToys, setAllToys] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/alltoys`)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])
    console.log(allToys);
    return (
        <div>
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

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            {
                                allToys.map(toy => <div key={toy._id}>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={toy.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{toy.toyName}</div>
                                            </div>
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
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </td>


                                </div>
                                )
                            }
                        </tr>

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