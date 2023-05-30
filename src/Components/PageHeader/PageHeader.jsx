import './PageHeader.css'
const PageHeader = ({ heading, subHeading }) => {
    return (
        <div className="h-[350px] header-img text-white">
            <div className='pt-40 pl-8 lg:pl-44'>
                <p className='text-lg mb-3'>{subHeading}</p>
                <h2 className='text-4xl font-bold'>{heading}</h2>
            </div>
        </div>
    );
};

export default PageHeader;