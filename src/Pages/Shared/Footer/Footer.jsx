import Logo from '../../../assets/logo.jpg';
import { FaFacebook, FaTwitter, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 pb-4 bg-base-200 text-base-content">
                <div>
                    <img className='w-44' src={Logo} alt="" />
                    <p>SPORTOYS Industries Ltd.<br />Providing relevant products since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Contact Info</span>
                    <div className='flex flex-col gap-2'>
                        <p>Phone: 0088-3674-3972</p>
                        <p>Phone: 0088-5599-4532</p>
                        <p>Email: info@example.com</p>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Social Links</span>
                    <div className='flex items-center gap-3 text-md'>
                        <FaFacebook></FaFacebook> Facebook
                    </div>
                    <div className='flex items-center gap-3 text-md'>
                        <FaTwitter></FaTwitter> Twitter
                    </div>
                    <div className='flex items-center gap-3 text-md'>
                        <FaInstagramSquare></FaInstagramSquare> Instagram
                    </div>
                    <div className='flex items-center gap-3 text-md'>
                        <FaLinkedin></FaLinkedin> Linkedin
                    </div>
                </div>
                <div>
                    <span className="footer-title">Address</span>
                    <p>123 Main Street <br />
                        Anytown, USA 12345
                    </p>
                </div>
            </footer>

            {/* Copyright */}
            <div className="text-center pb-2 bg-base-200">
                <p className='text-center m-0 text-xl'><small>© copyright of my design.</small></p>
            </div>
        </div>
    );
};

export default Footer;