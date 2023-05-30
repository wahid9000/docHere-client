import { useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const Doctors = () => {

    const [doctors, setDoctors] = useState([])
    

    return (
        <div>
            <SectionTitle
            heading={"Our Expert Doctors"}
            subHeading={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}
            ></SectionTitle>


        </div>
    );
};

export default Doctors;