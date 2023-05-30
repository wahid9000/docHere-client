import Banner from "../Banner/Banner";
import Doctors from "../Doctors/doctors";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="w-full md:w-10/12 mx-auto">
            <Doctors></Doctors>
            </div>
        </div>
    );
};

export default Home;