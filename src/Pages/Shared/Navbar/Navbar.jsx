
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const Navbar = () => {
    const { logOut, user } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-[#35354b] opacity-90 fixed z-40 md:px-40 pt-8 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu text-[#35354b] menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Home</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Appointment</Link></li>
                        <li><Link>Reviews</Link></li>
                        <li><Link>Contact Us</Link></li>
                        {
                            user ?
                                <li><Link><button onClick={handleLogout} className='btn'>Logout</button></Link></li>
                                :
                                <li><Link to='login'><button className='btn'>Login</button></Link></li>
                        }
                    </ul>
                </div>
                <a className="btn text-white font-bold btn-ghost normal-case text-2xl">DocHere</a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 font-bold text-white">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/dashboard/myAppointments'>Dashboard</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link>Reviews</Link></li>
                    <li><Link>Contact Us</Link></li>
                    {
                        user ?
                            <li><Link><button onClick={handleLogout} className='btn'>Logout</button></Link></li>
                            :
                            <li><Link to='login'><button className='btn'>Login</button></Link></li>
                    }

                </ul>
                {
                    user &&
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </label>
                }
            </div>
        </div>
    );
};

export default Navbar;