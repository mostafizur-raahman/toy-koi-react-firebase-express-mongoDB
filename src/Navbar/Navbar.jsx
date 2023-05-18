import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <div className="flex justify-between items-center gap-10">
                <Link to='/' className="flex items-center">
                    <img src='https://i.ibb.co/TBfRv6X/baby-logo.jpg' alt="website logo img" className="h-[100px]" />
                    <p className="text-4xl font-bold">T<span className="text-pink-500">0</span>y k<span className="text-pink-500">0</span>i </p>
                </Link>
                <div className="flex gap-10">
                    <NavLink to='/' activeClassName='active'>Home</NavLink>
                    <NavLink to='/allToys' activeClassName='active'>ALL Toys</NavLink>
                    <NavLink to='/login' activeClassName='active'>Login</NavLink>
                    <NavLink to='/register' activeClassName='active'>Register</NavLink>

                </div>
            </div>
        </>
    );
};

export default Navbar;