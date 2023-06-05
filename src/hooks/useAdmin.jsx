import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const {data: isAdmin=[], isLoading: isAdminloading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            return res.data.admin;
        }
    })

    return [isAdmin, isAdminloading]
}

export default useAdmin
















// const useAdmin = () => {
    //     const {user} = useContext(AuthContext)
    //     const [axiosSecure] = useAxiosSecure()
    
    //     const {data: isAdmin=[], isLoading: isAdminLoading} = useQuery({
    //         querykey: ['isAdmin', user?.email],
    //         queryFn: async() => {
    //         const res = await axiosSecure.get(`/users/admin/${user?.email}`)
    //         return res.data.admin;
    //         }
    //     })
    
    //     return [isAdmin, isAdminLoading]
    // }
    