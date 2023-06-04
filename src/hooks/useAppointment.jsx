import { useContext } from "react"
import { AuthContext } from "../Pages/Provider/AuthProvider"
import { useQuery } from "@tanstack/react-query";

const useAppointment = () => {
    const {user, loading} = useContext(AuthContext);

    const { data: bookedAppointments = []} = useQuery({
        queryKey: ['bookedAppointments', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookedAppointments?email=${user?.email}`);
            return res.json();
        }
    })
    return [bookedAppointments]
}
export default useAppointment;