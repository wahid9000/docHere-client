import { Helmet } from "react-helmet-async";
import PageHeader from "../../../Components/PageHeader/PageHeader";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useScrollTop from "../../../hooks/useScrollTop";


const BookAppointment = () => {
    
    const { pathName } = useLocation();
    useScrollTop(pathName);
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const doctorInfo = useLoaderData();
    const { name, service } = doctorInfo;

    const handleBookAppointment = event => {
        event.preventDefault();
        const form = event.target;
        const phone = form.phone.value;
        const date = form.date.value;
        const bookingInfo = { doctorName: name, patientEmail: user.email, patientName: user.displayName, serviceName: service, appointmentTime: date, patientContact: phone }
        console.log(bookingInfo);

        fetch('http://localhost:5000/bookedAppointments', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    navigate('/dashboard/myAppointments')
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your appointment has been booked successfully',
                        icon: 'success',
                        confirmButtonText: 'Continue'
                    })
                }
            })

    }

    return (
        <div className="py-24">
            <Helmet><title>DocHere | Book Appointment</title></Helmet>
            <PageHeader heading={'Book Appointment'} subHeading={`${name} / Book Appointment`}></PageHeader>

            <div>
                <form onSubmit={handleBookAppointment} className="py-8">
                    <div className="w-8/12 mx-auto space-y-5">
                        <div className="w-1/2 mx-auto">
                            <label htmlFor="">Select Date & Time:</label>
                            <input type="datetime-local" name='date' placeholder="Date & Time" className="input input-bordered w-full" />
                        </div>


                        <div className="grid md:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="">Doctors Name:</label>
                                <input type="text" placeholder="Doctor's Name" readOnly defaultValue={name} className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label htmlFor="">Service:</label>
                                <input type="text" placeholder="Select Service" readOnly defaultValue={service} className="input input-bordered w-full" />
                            </div>


                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="">Patient Name:</label>
                                <input type="text" placeholder="Type here" readOnly defaultValue={user?.displayName} className="input input-bordered w-full" />
                            </div>

                            <div>
                                <label htmlFor="">Patient Phone:</label>
                                <input type="number" name='phone' placeholder="Type here" className="input input-bordered w-full" required />
                            </div>

                        </div>

                        <input type="submit" value="Book Your Appointment" className="btn btn-block btn-primary text-white bg-[#35354b] rounded-md mt-5" />
                    </div>



                </form>
            </div >

        </div >
    );
};

export default BookAppointment;