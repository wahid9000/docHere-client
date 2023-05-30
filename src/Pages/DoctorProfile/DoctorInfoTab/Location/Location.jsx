

const Location = ({doctorsInfo}) => {
    return (
        <div>
             <div>
                <h2 className="text-2xl font-bold mb-3">Location</h2>
                <p className="text-justify">{doctorsInfo.location}</p>
            </div>

        </div>
    );
};

export default Location;