
const Footer = () => {
    return (
        <div className="h-[300px]">
            <footer className="footer p-10 bg-[#35354b] text-white">
                <div>
                    <h2 className="text-2xl">DocHere</h2>
                    <p className="text-lg">Book Your Appointment Easily With Us</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <div>
                <p className="pt-10 bg-[#35354b] text-white text-center text-lg">Copyright © 2023 @DocHere</p>
            </div>
        </div>
    );
};

export default Footer;