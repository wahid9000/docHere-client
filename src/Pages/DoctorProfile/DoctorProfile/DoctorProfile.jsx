import { Helmet } from 'react-helmet-async';
import { useLoaderData } from "react-router-dom";
import PageHeader from '../../../Components/PageHeader/PageHeader';
import DoctorCard from '../DoctorCard/DoctorCard';
import DoctorInfoTab from '../DoctorInfoTab/DoctorInfo/DoctorInfoTab';




const DoctorProfile = () => {

    const doctorsInfo = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>DocHere | Doctor Profile</title>
            </Helmet>
            <PageHeader
            heading={"Doctor Profile"}
            subHeading={"Home / Doctor Profile"}
            ></PageHeader>

           <DoctorCard doctorsInfo= {doctorsInfo}></DoctorCard>

           <DoctorInfoTab doctorsInfo= {doctorsInfo}></DoctorInfoTab>

        </div>
    );
};

export default DoctorProfile;