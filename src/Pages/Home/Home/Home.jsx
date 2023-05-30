import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/doctors";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="w-10/12 mx-auto">
            <Doctors></Doctors>
            <AboutUs></AboutUs>
            </div>
        </div>
    );
};

export default Home;