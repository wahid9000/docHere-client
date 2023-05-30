import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Keyboard } from "swiper";
import { Link } from "react-router-dom";


const Doctors = () => {

    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))

    }, [])

    return (
        <div>
            <SectionTitle
                heading={"Our Expert Doctors"}
                subHeading={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}
            ></SectionTitle>

            <div className="mt-12">
                <Swiper
                    slidesPerView={3}
                    navigation={true}
                    keyboard={true}
                    modules={[Navigation, Keyboard]}
                    className="mySwiper"
                >
                    <div>
                        {
                            doctors.map(doctor => <SwiperSlide key={doctor._id}>

                                <div className="mb-10 card mx-auto w-96 bg-base-100 shadow-md">
                                    <figure className="px-10 pt-10">
                                        <img src={doctor.image} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{doctor.name}</h2>
                                        <p>{doctor.doctor_level}</p>
                                        <div className="card-actions">
                                            <Link to={`/doctorProfile/${doctor._id}`}><button className="btn border-[#F7A582] text-[#F7A582] hover:text-white hover:bg-[#F7A582] hover:border-[#F7A582] bg-white w-full">View Profile</button></Link>
                                        </div>
                                    </div>
                                </div>


                            </SwiperSlide>)
                        }
                    </div>

                </Swiper>
            </div>




        </div>
    );
};

export default Doctors;