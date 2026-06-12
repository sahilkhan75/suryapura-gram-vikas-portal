const features = [
    {
        title: "शिक्षा",
        description:
            "आधुनिक विद्यालय, डिजिटल शिक्षा और उज्जवल भविष्य की दिशा में प्रयास।",
        image: "Screenshot 2026-06-12 115215.png",
    },
    {
        title: "किसान",
        description:
            "कृषि विकास, आधुनिक खेती और किसानों की समृद्धि के लिए योजनाएं।",
        image: "Screenshot 2026-06-12 115204.png",
    },
    {
        title: "सड़क",
        description:
            "बेहतर सड़क संपर्क और मजबूत आधारभूत संरचना का विकास।",
        image: "Screenshot 2026-06-12 115248.png",
    },
    {
        title: "पंचायत",
        description:
            "पारदर्शी प्रशासन और ग्राम पंचायत की डिजिटल सेवाएं।",
        image: "Screenshot 2026-06-12 115238.png",
    },
    {
        title: "डिजिटल पहचान",
        description:
            "गांव को डिजिटल रूप से जोड़कर नई पहचान और अवसर प्रदान करना।",
        image: "Screenshot 2026-06-12 115227.png",
    },
];

const Features = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Heading */}
                <div className="text-center mb-14">
                    <span className="text-green-700 font-semibold">
                        विकास के प्रमुख क्षेत्र
                    </span>

                    <h2 className="text-4xl font-bold mt-3 text-gray-900">
                        सूर्यपुरा की प्रगति के स्तंभ
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        गांव के विकास को गति देने वाले प्रमुख क्षेत्रों को
                        यहां दर्शाया गया है।
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-green-700">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>

                                <button className="mt-5 text-green-700 font-semibold hover:text-green-900">
                                    और जानें →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;
