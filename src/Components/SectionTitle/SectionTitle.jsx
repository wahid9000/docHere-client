

const SectionTitle = ({heading, subHeading}) => {
    return(
       <div className="mt-24">
         <div className="text-center space-y-5">
            <h2 className="text-[#35354b] text-4xl font-bold">
                {heading}
            </h2>
            <p className="text-lg w-11/12  md:w-2/3 mx-auto">
                {subHeading}
            </p>
        </div>
       </div>
    )
}

export default SectionTitle;