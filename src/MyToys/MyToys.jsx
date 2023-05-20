import { useEffect, useState } from "react";
import { FaCross } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const MyToys = () => {
    const data = useLoaderData();
    console.log(data);
    const [remaining, setRemaining] = useState(data);
    useEffect(() => {
        document.title = 'Toy KOi | my toys'
    }, [])
    const handledelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addAToy/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee     has been deleted.',
                                'success'
                            )
                        }
                        const remain = remaining.filter(r => r._id !== id);
                        setRemaining(remain)

                    })
            }

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
                            remaining?.map(toy => <tr key={toy._id}>
                                <td>{toy.name}</td>
                                <td>{toy.sellerName}</td>
                                <td>{toy.category}</td>
                                <td>{toy.price}</td>
                                <td>{toy.rating}</td>
                                <td>{toy.quantity}</td>

                                <td className="flex gap-3">
                                    <Link to={`/update/${toy._id}`}>
                                        <button className="btn bg-sky-500">update</button>
                                    </Link>
                                    <button className="btn bg-red-600" onClick={() => handledelete(toy._id)}> delete </button>
                                </td>

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