import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000',
    })

    useEffect(() => {

        axiosSecure.interceptors.request.use(request => {
            const token = localStorage.getItem('access-token');
            if (token) {
                request.headers.Authorization = `bearer ${token}`
            }
            return request;
        })

        axiosSecure.interceptors.response.use(response => response, async (error) => {
            console.log(error);
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                await logOut();
                navigate('/login')
            }
        }

        )
    }, [logOut, navigate, axiosSecure])

    return [axiosSecure];

}


export default useAxiosSecure;
















//     const axiosSecure = axios.create({
//         baseURL: 'http://localhost:5000'
//     })

//     useEffect(() => {
//         axiosSecure.interceptors.request.use(request => {
//             const token = localStorage.getItem('access-token');
//             if (token) {
//                 request.headers.Authorization = `Bearer ${token}`
//             }
//             return request;
//         })

//         axiosSecure.interceptors.response.use(
//             (response) => response,
//             async (error) => {
//                 console.log(error);
//                 if (error.response && (error.response.status === 401 || error.response.status === 403)) {
//                     await logOut();
//                     navigate('/login')
//                 }
//                 return Promise.reject(error)
//             }
//         );
//     }, [logOut, navigate, axiosSecure]);

//     return [axiosSecure];
// }

// 