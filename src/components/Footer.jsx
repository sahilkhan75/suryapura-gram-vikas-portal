import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-green-900 text-white">
            <div className="max-w-7xl mx-auto px-6 py-14">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Logo & About */}
                    <div>
                        <h2 className="text-3xl font-bold">
                            सूर्यपुरा
                        </h2>

                        <p className="mt-4 text-green-100 leading-relaxed">
                            सूर्यपुरा ग्राम विकास पोर्टल गांव के विकास,
                            शिक्षा, कृषि, पंचायत और डिजिटल पहचान को
                            बढ़ावा देने के लिए बनाया गया एक डेमो प्लेटफॉर्म है।
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-green-100">
                            <li className="hover:text-white cursor-pointer">
                                होम
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                विकास कार्य
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                सेवाएं
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                समाचार
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                संपर्क करें
                            </li>
                        </ul>
                    </div>

                    {/* Development Areas */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            विकास क्षेत्र
                        </h3>

                        <ul className="space-y-3 text-green-100">
                            <li>शिक्षा</li>
                            <li>किसान</li>
                            <li>सड़क विकास</li>
                            <li>पंचायत</li>
                            <li>डिजिटल पहचान</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Follow Us
                        </h3>

                        <div className="flex gap-4">

                            <a
                                href="#"
                                className="bg-green-800 p-3 rounded-full hover:bg-green-700 transition"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="#"
                                className="bg-green-800 p-3 rounded-full hover:bg-green-700 transition"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="#"
                                className="bg-green-800 p-3 rounded-full hover:bg-green-700 transition"
                            >
                                <FaYoutube />
                            </a>

                            <a
                                href="#"
                                className="bg-green-800 p-3 rounded-full hover:bg-green-700 transition"
                            >
                                <FaLinkedinIn />
                            </a>

                        </div>

                        <p className="mt-5 text-green-100">
                            Email: info@suryapura.in
                        </p>

                        <p className="text-green-100">
                            Phone: +91 98765 43210
                        </p>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="border-t border-green-700 mt-10 pt-6 text-center text-green-200">
                    <p>
                        © 2026 सूर्यपुरा ग्राम विकास पोर्टल. All Rights Reserved.
                    </p>

                    <p className="mt-2">
                        Designed with ❤️ for Rural Development
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;