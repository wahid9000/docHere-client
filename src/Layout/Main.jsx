import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";


const Main = () => {
    const location = useLocation()
    const isLogin = location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div>
            <div className="min-h-screen">
                { isLogin || <Navbar></Navbar>}
                <Outlet></Outlet>
            </div>
            {isLogin || <Footer></Footer>}
        </div>
    );
};

export default Main;