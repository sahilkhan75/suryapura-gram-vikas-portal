const Hero = () => {
    return (
        <section className="bg-gradient-to-br from-green-50 via-white to-yellow-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div>
                        <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                            🌱 ग्राम विकास एवं डिजिटल पहचान
                        </span>

                        <h1 className="mt-6 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                            सूर्यपुरा
                            <span className="block text-green-700">
                                बदलते गांव की नई पहचान
                            </span>
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            शिक्षा, किसान, सड़क, पंचायत और डिजिटल सेवाओं के माध्यम से
                            सूर्यपुरा गांव को आधुनिक और आत्मनिर्भर बनाने की दिशा में
                            एक नई पहल।
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-semibold transition">
                                हमारे विकास कार्य देखें
                            </button>

                            <button className="border-2 border-green-700 text-green-700 hover:bg-green-50 px-8 py-4 rounded-xl font-semibold transition">
                                गांव के बारे में जानें
                            </button>
                        </div>

                        {/* Quick Highlights */}
                        <div className="mt-10 flex flex-wrap gap-6">
                            <div>
                                <h3 className="text-2xl font-bold text-green-700">1250+</h3>
                                <p className="text-gray-600">किसान</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-green-700">15 KM</h3>
                                <p className="text-gray-600">सड़क विकास</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-green-700">100%</h3>
                                <p className="text-gray-600">डिजिटल पंचायत</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        {/* Background Decoration */}
                        <div className="absolute inset-0 bg-green-200 rounded-3xl rotate-3"></div>

                        <img
                            src="public/Screenshot 2026-06-12 115150.png"
                            alt="Visionary Rural Leader"
                            className="relative rounded-3xl shadow-2xl w-full object-cover"
                        />

                        {/* Floating Card */}
                        <div className="absolute bottom-6 left-6 bg-white p-4 rounded-2xl shadow-lg">
                            <p className="text-sm text-gray-500">
                                विकास अभियान
                            </p>
                            <h3 className="font-bold text-green-700">
                                आत्मनिर्भर सूर्यपुरा
                            </h3>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;