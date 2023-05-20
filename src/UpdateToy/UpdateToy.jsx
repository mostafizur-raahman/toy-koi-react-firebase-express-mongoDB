import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateToy = () => {
    const updateData = useLoaderData();
    console.log(updateData);
    const updateInfo = (e) => {
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        console.log(price, quantity, description);

        const data = {
            price, quantity, description
        }
        fetch(`https://assignment-11-server-three-lemon.vercel.app/addAToy/${updateData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been update',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }
    return (
        <div>
            <h1 className="text-center text-4xl font-bold">Update Toy Informations </h1>
            <form onSubmit={updateInfo}>
                <div className="form-control w-1/2 ml-[300px]">
                    <label className="label">
                        <span className="label-text font-semibold">Price</span>
                    </label>
                    <input type="text" defaultValue={updateData.price} name="price" placeholder="price" className="input input-bordered" />
                </div>
                <div className="form-control w-1/2 ml-[300px]">
                    <label className="label">
                        <span className="label-text font-semibold">Available quantity</span>
                    </label>
                    <input type="text" defaultValue={updateData.quantity} name="quantity" placeholder="quantity" className="input input-bordered" />
                </div>
                <div className="form-control w-1/2 ml-[300px]">
                    <label className="label">
                        <span className="label-text font-semibold">Description</span>
                    </label>
                    <input type="text" defaultValue={updateData.description} name="description" placeholder="price" className="input input-bordered" />
                </div>
                <div className="text-center mt-5">
                    <input type="submit" value="Update" className="btn bg-sky-500" />
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;