import image from '../../../assets/doctor4.jpg'
import image2 from '../../../assets/teeth.png'

const AboutUs = () => {
    return (
        <div className="my-28">
            <div className="grid md:grid-cols-2 gap-10 mx-auto">
                <div>
                    <img src={image} className="rounded-xl" alt="" />
                </div>
                <div className="space-y-8">
                    <div>
                        <h2 className="text-4xl font-bold mb-4 text-[#35354b]">Our Services</h2>
                        <p className="text-lg text-justify">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                    <div className="md:flex justify-start items-center gap-12">
                        <button className="btn border-[#F7A582] text-[#F7A582] hover:text-white hover:bg-[#F7A582] hover:border-[#F7A582] bg-white">Cavity Protection</button>
                        <button className="btn border-[#F7A582] text-[#F7A582] hover:text-white hover:bg-[#F7A582] hover:border-[#F7A582] bg-white">Cosmetic Dentistry</button>
                        <button className="btn border-[#F7A582] text-[#F7A582] hover:text-white hover:bg-[#F7A582] hover:border-[#F7A582] bg-white">Oral Surgery</button>
                    </div>
                    <div>
                        <img className="w-full" src={image2} alt="" />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Electro  Gastrology Therapy</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                        <button className="btn mt-10 border-[#F7A582] text-[#F7A582] hover:text-white hover:bg-[#F7A582] hover:border-[#F7A582] bg-white">More Details</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;