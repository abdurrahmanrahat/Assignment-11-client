import { Link } from "react-router-dom";
import Logo from '../../../assets/logo.jpg';
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    // User logout
    const handleLogout = () => {
        logOut();
    }

    const nabItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/alltoys">All Toys</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
    </>

    return (
        <div className="navbar bg-base-200 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {nabItems}
                    </ul>
                </div>
                <div className="md:flex items-center">
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img className="w-40" src={Logo} alt="" />
                    </Link>
                    <h2 className="text-1xl font-semibold ml-5">Sportoys</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {nabItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <img className='rounded-2xl me-4 w-10 h-10' src={user?.photoURL} alt="" />
                }
                {user ?
                    <button onClick={handleLogout} className="btn btn-primary">LogOut</button>
                    :
                    <Link to="/login">
                        <button className="btn btn-primary">Login</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Header;