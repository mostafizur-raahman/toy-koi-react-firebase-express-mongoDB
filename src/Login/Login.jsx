import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Login = () => {
    const [error, setError] = useState(null);
    const { handleGoogle, loginUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                navigate('/')
            })
            .catch(e => {
                setError(e.message);
                console.log(e.message);
            })
    }
    return (
        <div className="hero ">
            <div className="hero-content flex-col">
                <h1 className="text-4xl font-bold">Please login!!!</h1>
                <form onSubmit={handleLogin} >
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='/register' className="label-text-alt link link-hover">new to toy koi? register</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Log in" className="bg-pink-500 p-2 rounded-xl" />
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;