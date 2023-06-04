
import moment from "moment/moment";
import useAppointment from "../../hooks/useAppointment";

const MyAppointments = () => {
    const [bookedAppointments] = useAppointment();
    console.log(bookedAppointments);
    return (
        <div>
            <div>
                <h2 className="text-3xl font-bold mb-8">My Appointments: {bookedAppointments.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Doctor Name</th>
                                <th>Service Name</th>
                                <th>Date & Time</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookedAppointments.map((app, index) =>

                                    <tr key={app._id}>
                                        <th>{index + 1}</th>
                                        <td>{app.doctorName}</td>
                                        <td>{app.serviceName}</td>
                                        <td>{moment(
                                            app.appointmentTime).format('MMMM Do YYYY, h:mm a')}</td>
                                        <td><button className="btn btn-primary">Pay</button></td>
                                    </tr>)
                            }
                            <tr>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
};

export default MyAppointments;