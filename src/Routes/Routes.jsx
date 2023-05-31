import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import DoctorProfile from "../Pages/DoctorProfile/DoctorProfile/DoctorProfile";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import PrivateRoute from "./PrivateRoute";
import BookAppointment from "../Pages/BookAppointment/BookAppointment/BookAppointment";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,

        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/doctorProfile/:id',
                element: <PrivateRoute><DoctorProfile></DoctorProfile></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/doctors/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path: '/about',
                element: <PrivateRoute><About></About></PrivateRoute>
            },
            {
                path: '/bookAppointment/:id',
                element: <BookAppointment></BookAppointment>,
                loader: ({params}) => fetch(`http://localhost:5000/doctors/${params.id}`)
            }
        ]
    },
]);

export default router;