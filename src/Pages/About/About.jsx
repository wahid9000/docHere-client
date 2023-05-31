import { Helmet } from "react-helmet-async";
import PageHeader from "../../Components/PageHeader/PageHeader";

const About = () => {
    return (
        <div>
            <Helmet><title>DocHere | Book Appointment</title></Helmet>
            <PageHeader heading={'About Us'} subHeading={'Home / About Us'}></PageHeader>
        </div>
    );
};

export default About;