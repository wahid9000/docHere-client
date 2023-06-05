import { useContext } from "react"
import { AuthContext } from "../Pages/Provider/AuthProvider"
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAppointment = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: bookedAppointments = []} = useQuery({
        queryKey: ['bookedAppointments', user?.email],
        enabled: !loading,
        queryFn: async() => {
            const res = await axiosSecure(`/bookedAppointments?email=${user?.email}`)
            return res.data;
        }
    })
    return [bookedAppointments]
}
export default useAppointment;






        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/bookedAppointments?email=${user?.email}`, {headers: {
        //         authorization: `bearer ${token}`
        //     }});
        //     return res.json();
        // }