import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        "होम",
        "हमारे बारे में",
        "विकास कार्य",
        "सेवाएं",
        "समाचार",
        "संपर्क करें",
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div>
                    <h1 className="text-2xl font-bold text-green-700">
                        सूर्यपुरा
                    </h1>
                    <p className="text-xs text-gray-500">
                        ग्राम विकास पोर्टल
                    </p>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
                    {navLinks.map((link) => (
                        <li
                            key={link}
                            className="cursor-pointer hover:text-green-700 transition"
                        >
                            {link}
                        </li>
                    ))}
                </ul>

                {/* Desktop Button */}
                <button className="hidden md:block bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition">
                    पंचायत लॉगिन
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-3xl text-green-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <ul className="flex flex-col p-4 gap-4">
                        {navLinks.map((link) => (
                            <li
                                key={link}
                                className="cursor-pointer text-gray-700 hover:text-green-700"
                            >
                                {link}
                            </li>
                        ))}
                    </ul>

                    <div className="px-4 pb-4">
                        <button className="w-full bg-green-700 text-white py-3 rounded-lg">
                            पंचायत लॉगिन
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;