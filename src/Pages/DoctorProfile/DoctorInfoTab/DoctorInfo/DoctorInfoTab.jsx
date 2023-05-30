
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OverView from '../OverView/OverView';
import Location from '../Location/Location';
import BookingTime from '../BookingTime/BookingTime';

const DoctorInfoTab = ({ doctorsInfo }) => {

    return (
        <div className="card mx-auto border p-8 my-10 w-11/12 md:w-9/12 bg-slate-100">
            <Tabs>
                <TabList className={'text-center mb-8 text-bold text-xl md:text-2xl space-x-2 md:space-x-16'}>
                    <Tab>Overview</Tab>
                    <Tab>Location</Tab>
                    <Tab>Booking Time</Tab>
                </TabList>

                <TabPanel>
                    <OverView doctorsInfo = {doctorsInfo}></OverView>
                </TabPanel>
                <TabPanel>
                    <Location doctorsInfo = {doctorsInfo}></Location>
                </TabPanel>
                <TabPanel>
                    <BookingTime doctorsInfo = {doctorsInfo}></BookingTime>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default DoctorInfoTab;