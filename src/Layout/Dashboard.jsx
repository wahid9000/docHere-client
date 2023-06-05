import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import useAdmin from "../hooks/useAdmin";
import { FaBars } from "react-icons/fa";

const Dashboard = () => {

    // const isAdmin = 'true';
    const [isAdmin] = useAdmin();


    return (
        <div>
            <Navbar></Navbar>


            <div className="drawer drawer-mobile bg-slate-100">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div>
                        <label htmlFor="my-drawer-2" className="btn lg:hidden mt-24 ml-4"><FaBars></FaBars></label>
                    </div>
                    <div className="md:mt-32 p-5">
                        <Outlet></Outlet>
                    </div>


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content pt-32">

                        {
                            isAdmin ?
                                <>
                                    <li><Link className="text-xl" to='/dashboard/allUsers'>AllUsers</Link></li>
                                    <li><Link className="text-xl" to='/dashboard/addDoctor'>Add a Doctor</Link></li>
                                    <li><Link className="text-xl" to='/dashboard/myAppointments'>Manage Doctors</Link></li>
                                </>
                                :
                                <>
                                    <li><Link className="text-xl" to='/dashboard/myAppointments'>My Appointments</Link></li>
                                    <li><Link className="text-xl" to='/dashboard/myAppointments'>My Reviews</Link></li>
                                    <li><Link className="text-xl" to='/dashboard/myAppointments'>My Appointment History</Link></li>
                                </>
                        }
                        <li><Link to='/'><button className="btn btn-pimary">Return To Home</button></Link></li>
                    </ul>


                </div>
            </div>
        </div>

    );
};

export default Dashboard;