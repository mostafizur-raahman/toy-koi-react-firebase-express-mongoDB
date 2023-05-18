import { Link } from "react-router-dom";


const Register = () => {


    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(name, email, password, photoURL);
    }
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col">
                    <h1 className="text-4xl font-bold"> please Register</h1>
                    <form onSubmit={handleRegister} >
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" />
                                    <label className="label">
                                        <Link to='/login' className="label-text-alt link link-hover">Already have an account?Log in</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Register" className="bg-pink-500 p-2 rounded-xl" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Register;