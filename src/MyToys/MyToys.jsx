import { FaCross } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";


const MyToys = () => {
    const data = useLoaderData();
    console.log(data);

    const handledelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/addAToy/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <div className=" overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>

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
                            data?.map(toy => <tr key={toy._id}>
                                <td>{toy.name}</td>
                                <td>{toy.sellerName}</td>
                                <td>{toy.category}</td>
                                <td>{toy.price}</td>
                                <td>{toy.rating}</td>
                                <td>{toy.quantity}</td>
                                <button className="btn" onClick={() => handledelete(toy._id)}> delete </button>

                            </tr>



                            )
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;