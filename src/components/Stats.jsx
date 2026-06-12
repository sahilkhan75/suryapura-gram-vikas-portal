import { FaUsers, FaRoad, FaSchool, FaLeaf, FaLaptop } from "react-icons/fa";

const stats = [
    {
        icon: <FaLeaf />,
        value: "1250+",
        label: "किसान",
    },
    {
        icon: <FaRoad />,
        value: "15+ KM",
        label: "सड़क निर्माण",
    },
    {
        icon: <FaSchool />,
        value: "3",
        label: "विद्यालय",
    },
    {
        icon: <FaUsers />,
        value: "8+",
        label: "विकास कार्य",
    },
    {
        icon: <FaLaptop />,
        value: "100%",
        label: "डिजिटल पंचायत",
    },
];

const Stats = () => {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">
                        सूर्यपुरा की उपलब्धियां
                    </h2>
                    <p className="text-gray-600 mt-3">
                        गांव के विकास की एक झलक
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="bg-green-50 hover:bg-green-100 transition duration-300 rounded-2xl shadow-md p-6 text-center"
                        >
                            <div className="text-4xl text-green-700 flex justify-center mb-4">
                                {item.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800">
                                {item.value}
                            </h3>

                            <p className="text-gray-600 mt-2">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Stats;