import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <span className="text-green-700 font-semibold">
                        संपर्क करें
                    </span>

                    <h2 className="text-4xl font-bold mt-3 text-gray-900">
                        हमसे जुड़ें
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        ग्राम विकास, पंचायत सेवाओं या किसी भी सुझाव के लिए
                        हमसे संपर्क करें।
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* Left Side */}
                    <div className="bg-white rounded-3xl shadow-lg p-8">

                        <h3 className="text-2xl font-bold mb-8 text-green-700">
                            संपर्क जानकारी
                        </h3>

                        <div className="space-y-6">

                            <div className="flex items-start gap-4">
                                <div className="bg-green-100 p-3 rounded-full">
                                    <FaMapMarkerAlt className="text-green-700" />
                                </div>

                                <div>
                                    <h4 className="font-semibold">पता</h4>
                                    <p className="text-gray-600">
                                        सूर्यपुरा ग्राम पंचायत, राजस्थान, भारत
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-green-100 p-3 rounded-full">
                                    <FaPhoneAlt className="text-green-700" />
                                </div>

                                <div>
                                    <h4 className="font-semibold">फोन</h4>
                                    <p className="text-gray-600">
                                        +91 98765 43210
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-green-100 p-3 rounded-full">
                                    <FaEnvelope className="text-green-700" />
                                </div>

                                <div>
                                    <h4 className="font-semibold">ईमेल</h4>
                                    <p className="text-gray-600">
                                        info@suryapura.in
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Side Form */}
                    <div className="bg-white rounded-3xl shadow-lg p-8">

                        <h3 className="text-2xl font-bold mb-8 text-green-700">
                            संदेश भेजें
                        </h3>

                        <form className="space-y-5">

                            <input
                                type="text"
                                placeholder="आपका नाम"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-700"
                            />

                            <input
                                type="email"
                                placeholder="आपका ईमेल"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-700"
                            />

                            <input
                                type="text"
                                placeholder="विषय"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-700"
                            />

                            <textarea
                                rows="5"
                                placeholder="अपना संदेश लिखें..."
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-700"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-semibold transition"
                            >
                                संदेश भेजें
                            </button>

                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;