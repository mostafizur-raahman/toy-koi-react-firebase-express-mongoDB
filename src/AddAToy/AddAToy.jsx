import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
const AddAToy = () => {
    const { user } = useContext(AuthContext);
    useEffect(() => {
        document.title = 'Toy KOi | Add a toys'
    }, [])
    const handleAddToy = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        // console.log(photo, name, sellerName, sellerEmail, category, price, rating, quantity, description);
        const addAtoy = {
            photo, name, sellerName, sellerEmail, category, price, rating, quantity, description
        }
        console.log(addAtoy);

        fetch('https://assignment-11-server-three-lemon.vercel.app/addAToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addAtoy)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Toy added',
                    showConfirmButton: false,
                    timer: 1500
                })
            })



    }
    return (
        <div>
            <h1 className="text-center text-4xl font-bold">Add a Toy </h1>
            <form onSubmit={handleAddToy}>
                <div className="form-control w-1/2 ml-[300px]">
                    <label className="label">
                        <span className="label-text font-semibold">PhotoURL</span>
                    </label>
                    <input type="text" name="photo" placeholder="PhotoURL" className="input input-bordered" />
                </div>
                <div className="form-control w-1/2 ml-[300px]">
                    <label className="label">
                        <span className="label-text font-semibold">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control w-1/2 ml-[300px]">
                    <label className="label">
                        <span className="label-text font-semibold">Seller Name</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName} name="sellerName" placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control w-1/2 ml-[300px]">
                    <label className="label">
                        <span className="label-text font-semibold">Seller Email</span>
                    </label>
                    <input type="text" defaultValue={user?.email} name="sellerEmail" placeholder="Name" className="input input-bordered" />
                </div>
                <div className="w-1/2 ml-[300px] mt-4">
                    <select className="select select-primary w-full max-w-xs" name="category" >
                        <option disabled selected>What is the best Category?</option>
                        <option>animals</option>
                        <option>dolls</option>
                        <option>electronics</option>
                    </select>
                </div>
                <div className="form-control w-1/2 ml-[300px]">
                    <label className="label">
                        <span className="label-text font-semibold">Price</span>
                    </label>
                    <input type="text" name="price" placeholder="price" className="input input-bordered" />
                </div>
                <div className="form-control w-1/2 ml-[300px]">
                    <label className="label">
                        <span className="label-text font-semibold">Rating</span>
                    </label>
                    <input type="text" name="rating" placeholder="Rating" className="input input-bordered" />
                </div>
                <div className="form-control w-1/2 ml-[300px]">
                    <label className="label">
                        <span className="label-text font-semibold">Available quantity</span>
                    </label>
                    <input type="text" name="quantity" placeholder="Available quantity" className="input input-bordered" />
                </div>
                <div className="form-control w-1/2 ml-[300px]">
                    <label className="label">
                        <span className="label-text font-semibold">Descriptions</span>
                    </label>
                    <input type="text" name="description" placeholder="Descriptions" className="input input-bordered" />
                </div>
                <div className="text-center mt-4">
                    <input type="submit" value="Add Toy" className=" btn bg-pink-500" />
                </div>
            </form>
        </div>
    );
};

export default AddAToy;