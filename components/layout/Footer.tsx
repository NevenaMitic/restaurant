import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="bg-grey text-gold-1 py-6 mx-auto flex flex-col text-center items-center">
            <p className="text-heading3-bold font-playfair uppercase mb-3">Contact</p>
            <div className="text-base-medium font-extralight text-center text-gold">
                <Link href="mailto:nevenamitic886@gmail.com" className="block mb-4 hover:underline">
                    nevenamitic886@gmail.com
                </Link>
                <Link href="tel:+381645895784" className="block hover:underline">
                    +381645895784
                </Link>
            </div>

            <div className="flex space-x-4 my-4">
                <a
                    className="text-white hover:text-gold transform hover:scale-150 transition-all duration-150 ease-in-out"
                    href="https://github.com/NevenaMitic"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
                <a
                    className="text-white hover:text-gold transform hover:scale-150 transition-all duration-150 ease-in-out"
                    href="https://www.linkedin.com/in/nevena-mitic-0733a7191/"
                    aria-label="LinkedIn"
                >
                    <FaLinkedinIn />
                </a>
                <a
                    className="text-white hover:text-gold transform hover:scale-150 transition-all duration-150 ease-in-out"
                    href="https://www.instagram.com/nevenamitic__/?next=%2Fproud.mp%2Ffeed%2F"
                    aria-label="Instagram"
                >
                    <FaInstagram />
                </a>
            </div>
            <h6 className="text-center font-extralight pt-6 pb-2">&copy; {year}  – TSUBAKI. All rights reserved.</h6>
        </div>
    );
};

export default Footer;

