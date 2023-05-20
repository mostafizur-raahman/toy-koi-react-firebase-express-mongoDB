import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <>
            <div className="lg:flex grid justify-between items-center gap-10">
                <Link to='/' className="flex items-center">
                    <img src='https://i.ibb.co/TBfRv6X/baby-logo.jpg' alt="website logo img" className="h-[100px]" />
                    <p className="text-4xl font-bold">T<span className="text-pink-500">0</span>y k<span className="text-pink-500">0</span>i </p>
                </Link>
                <div className="flex gap-10">
                    {
                        user ? <div className='flex  gap-5 items-center'>
                            <p><NavLink activeClassName='active' to='/myToys'>My Toys</NavLink></p>
                            <p><NavLink activeClassName='active' to='/allToys'>All Toys</NavLink></p>
                            <p><NavLink activeClassName='active' to='/addAToy'>Add a toy</NavLink></p>
                            <p><NavLink activeClassName='active' to='/blog'>Blog</NavLink></p>
                            <img src={user?.photoURL} alt="User photo" className='rounded-full w-[50px] h-[50px]' />
                            <p><button onClick={handleLogout} className=' p-3 rounded-xl text-white bg-pink-500 '>Log out</button></p>
                        </div> : <div className='lg:flex grid gap-3'>
                            <p><NavLink activeClassName='active' to='/'>Home</NavLink></p>
                            <p><NavLink activeClassName='active' to='/allToys'>All Toys</NavLink></p>
                            <p><NavLink activeClassName='active' to='/login'>Login</NavLink></p>
                            <p><NavLink activeClassName='active' to='/blog'>Blog</NavLink></p>
                            <p><NavLink to='/register' activeClassName='active'>Registartion</NavLink></p>
                        </div>
                    }

                </div>
            </div >
        </>
    );
};

export default Navbar;