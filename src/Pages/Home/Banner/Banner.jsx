import './Banner.css'
import image from '../../../assets/doctors.png'
const Banner = () => {
    return (
        <div className="banner-img h-[800px] text-white">
            <div className='md:flex justify-center items-center pt-52 w-9/12 mx-auto'>
                <div className='space-y-5 text-center md:text-left mb-10'>
                    <h2 className='text-6xl font-semibold w-11/12 mx-auto md:mx-0'>Your Best Medical Help Center</h2>
                    <p className='text-xl w-10/12 mx-auto md:mx-0'>DocHere is a place where you will find your desired doctor easily and in a real quick time.</p>
                </div>
                <div>
                    <img src={image} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;