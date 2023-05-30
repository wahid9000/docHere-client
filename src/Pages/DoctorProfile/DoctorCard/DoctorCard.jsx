import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaSearchLocation } from 'react-icons/fa';

const DoctorCard = ({ doctorsInfo }) => {
    const { image, name, doctor_level, ratings, location, services } = doctorsInfo;
    return (
        <div className='h-[550px] md:h-[400px] card mx-auto border p-8 my-10 w-11/12 md:w-9/12'>
            <div className="grid md:grid-cols-2 items-center gap-5 md:gap-10">
                <div>
                    <img className="rounded-xl" src={image} alt="" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-2">{name}</h2>
                    <p className='mb-3'>{doctor_level}</p>
                    <p className='mb-3'>
                        <Rating
                            style={{ maxWidth: 140 }}
                            value={ratings}
                            readOnly
                        />
                    </p>
                    <p className='flex justify-start items-center gap-2'><FaSearchLocation></FaSearchLocation> {location}</p>
                    <div className='grid md:grid-cols-3 mt-5 gap-2'>
                        {
                            services.map(service => <div key={service._id}>
                                <div className='border text-center md:p-3 rounded-lg'>
                                {service}
                                </div>
                                
                            </div>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DoctorCard;