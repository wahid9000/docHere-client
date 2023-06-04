import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile bg-slate-100">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col mt-24 p-12">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content pt-32">
                        <li><Link className="text-xl" to='/dashboard/myAppointments'>My Appointments</Link></li>
                        <li><Link className="text-xl" to='/dashboard/myAppointments'>My Reviews</Link></li>     
                        <li><Link className="text-xl" to='/dashboard/myAppointments'>My Appointment History</Link></li>
                        <Link to='/'><button className="btn btn-pimary mt-96 ml-4">Return To Home</button></Link>
                    </ul>


                </div>
            </div>
        </div>

    );
};

export default Dashboard;