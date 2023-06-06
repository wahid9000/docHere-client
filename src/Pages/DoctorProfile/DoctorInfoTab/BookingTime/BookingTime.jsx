import moment from "moment/moment";

const BookingTime = ({doctorsInfo}) => {
    const {available_days, available_datetime} = doctorsInfo;
    return (
        <div className="space-y-7">
             <div>
                <h2 className="text-2xl font-bold mb-3">Booking Time</h2>
                <p className="text-justify">{moment(available_datetime).format('MMMM Do YYYY, h:mm a')}</p>
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-5">Days Of Availability</h2>
                <div className="flex gap-10">
                    {
                    available_days?.map(days => <div className="p-3 rounded-lg border-orange-600 border" key={days._id}>{days}</div>)

                }
                </div>
                
            </div>
        </div>
    );
};

export default BookingTime;