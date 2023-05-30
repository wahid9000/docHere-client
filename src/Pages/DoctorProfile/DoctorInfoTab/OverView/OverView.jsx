
const OverView = ({ doctorsInfo }) => {
    const { about_me, education_history, awards, services } = doctorsInfo;
    return (
        <div className="space-y-7">
            <div>
                <h2 className="text-2xl font-bold mb-3">About Me</h2>
                <p className="text-justify">{about_me}</p>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-3">Education</h2>
                <p>{education_history}</p>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-3">Awards</h2>
                {
                    awards.map(award => <li key={award._id}>{award}</li>)
                }
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-3">Services</h2>
                {
                    services.map(service => <li key={service._id}>{service}</li>)
                }
            </div>

        </div>
    );
};

export default OverView;