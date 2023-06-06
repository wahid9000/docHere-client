import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaSearchLocation } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import useScrollTop from '../../../hooks/useScrollTop';

const DoctorCard = ({ doctorsInfo }) => {
    const { pathName } = useLocation();
    useScrollTop(pathName);
    const { image, name, doctor_level, ratings, location, price, _id, service } = doctorsInfo;
    return (
        <div className='md:h-[400px] card mx-auto border p-8 my-10 w-11/12 md:w-9/12 bg-slate-100'>
            <div className="grid md:grid-cols-2 items-center gap-5 md:gap-10">
                <div>
                    <img className="rounded-xl" src={image} alt="" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-2">{name}</h2>
                    <p className='mb-3 text-lg'>{doctor_level} || {service}</p>
                    <p className='mb-3'>
                        <Rating
                            style={{ maxWidth: 140 }}
                            value={ratings}
                            readOnly
                        />
                    </p>
                    <p className='text-lg font-semibold mb-2'>{price}</p>
                    <p className='flex justify-start items-center gap-2 text-lg font-semibold '><FaSearchLocation></FaSearchLocation> {location}</p>
                    <div className='text-center'>
                        <Link to={`/bookAppointment/${_id}`}><button className='btn btn-block btn-primary bg-[#35354b] mt-24'>Book Appointment</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DoctorCard;