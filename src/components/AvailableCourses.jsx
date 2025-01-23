import React from "react";

const AvailableCourses = () => {
    const stories = [
        {
            id: 1,
            title: "Python Programming",
            description:
                "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.",
            image: "src/images/PythonCodingBeginner_Hero.jpg", // Replace with actual image URL
        },
        {
            id: 2,
            title: "The Fintech Blueprint",
            description:
                "Finance is being pulled apart by the forces of frontier technology. From AI, to blockchain, crypto and DeFi, to mixed reality, chatbots, neobanks, and roboadvisors — the industry will never be the",
            image: "src/images/fintech blueprint.jpg", // Replace with actual image URL
        },
        {
            id: 3,
            title: "Skill Accelarator BootCamp",
            description:
                "A comprehensive program designed to fast-track your career by equipping you with in-demand technical and professional skills. Real world project experience.",
            image: "src/images/Skill Accelarator.png", // Replace with actual image URL
        },
        {
            id: 4,
            title: "JavaScript",
            description:
                "A powerful, versatile programming language used to create dynamic and interactive web content. It's the backbone of modern web development, enabling developers to build responsive websites and applications.",
            image: "src/images/java.webp", // Replace with actual image URL
        },
        {
            id: 5,
            title: "Creative AI BootCamp",
            description:
                "An immersive program focused on harnessing AI tools for creative industries. Learn to integrate AI technologies in design, content creation, and innovative problem-solving..",
            image: "src/images/AI.jpg", // Replace with actual image URL
        },
        {
            id: 6,
            title: "Artificial Intelligence & Data Science",
            description:
                "A cutting-edge field combining AI technologies with data analysis to extract insights, make predictions, and drive innovation. It empowers industries to solve complex problems using machine learning and big data analytics.",
            image: "src/images/data science.jpeg", // Replace with actual image URL
        },
        {
            id: 7,
            title: "Graphic Designing",
            description:
                "A creative field that focuses on visual communication through the use of typography, imagery, and color. Learn to design impactful graphics for digital and print media using industry-standard tools.",
            image: "src/images/graphic.jpeg", // Replace with actual image URL
        },
        {
            id: 8,
            title: "UI/UX Designing",
            description:
                "A design discipline centered on creating user-friendly and visually appealing digital experiences. Master the art of crafting intuitive interfaces and seamless user journeys for websites and applications..",
            image: "src/images/ui ux.gif", // Replace with actual image URL
        },
        {
            id: 9,
            title: "Amazon FBA Mastery",
            description:
                "A specialized program to help you excel in managing and growing an Amazon FBA business. Learn product sourcing, listing optimization, inventory management, and strategies to maximize profits on the platform.",
            image: "src/images/amazon.jpeg", // Replace with actual image URL
        },
        {
            id: 10,
            title: "Modern Web Application Development",
            description:
                "A comprehensive course focusing on building responsive, secure, and scalable web applications using the latest frameworks and technologies. Learn to create full-stack solutions for real-world projects.",
            image: "src/images/web.jpeg", // Replace with actual image URL
        },
        {
            id: 11,
            title: "Cloud Data Engineering",
            description:
                "A specialized program designed to equip you with the skills to manage, optimize, and analyze large-scale data on cloud platforms. Learn to build scalable data pipelines and work with cutting-edge cloud technologies.",
            image: "src/images/Data.jpeg", // Replace with actual image URL
        },
        {
            id: 12,
            title: "Flutter",
            description:
                "A powerful open-source framework by Google for building natively compiled applications for mobile, web, and desktop from a single codebase. Master Flutter to create visually stunning, high-performance apps efficiently.",
            image: "src/images/flutter.webp", // Replace with actual image URL
        },

    ];

    return (
        <div className=" bg-gray-50  shadow-lg rounded-lg p-8 "><hr /><br />
            <h2 className="font-serif   text-headingColor text-lg md:text-2xl lg:text-3xl mb-4 text-center">
                Skills Development Courses
            </h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {stories.map((story) => (
                    <div
                        key={story.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                    >
                        <img
                            src={story.image}
                            alt={story.title}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {story.title}
                            </h3>
                            <p className="text-gray-600 text-base">{story.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AvailableCourses;
