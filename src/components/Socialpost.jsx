const posts = [
    {
        title: "किसानों की तरक्की, गांव की समृद्धि",
        description:
            "नई कृषि तकनीकों और सरकारी योजनाओं से सूर्यपुरा के किसान आत्मनिर्भर बन रहे हैं।",
        image: "Screenshot 2026-06-12 115204.png",
    },
    {
        title: "शिक्षा से उज्जवल भविष्य की ओर",
        description:
            "डिजिटल शिक्षा और आधुनिक सुविधाओं के साथ गांव के बच्चों को बेहतर अवसर मिल रहे हैं।",
        image: "Screenshot 2026-06-12 115215.png",
    },
];

const Socialpost = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-12">
                    <span className="text-green-700 font-semibold">
                        सोशल मीडिया अपडेट्स
                    </span>

                    <h2 className="text-4xl font-bold mt-3">
                        गांव की नई कहानियां
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {posts.map((post, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-64 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-green-700">
                                    {post.title}
                                </h3>

                                <p className="mt-3 text-gray-600">
                                    {post.description}
                                </p>

                                <button className="mt-4 bg-green-700 text-white px-5 py-2 rounded-lg">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Socialpost;
