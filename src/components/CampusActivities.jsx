import React from "react";

const CampusActivities = () => {
    const stories = [
        {
            id: 1,
            title: "UI/UX Presentations:",
            description:
                "UI/UX presentations are a powerful way to showcase designs that solve user challenges and enhance experiences. They should succinctly highlight the problem, the design process, and the impact of the solution. Key elements include clear visuals, user research insights, and prototypes that demonstrate functionality and usability. A professional presentation emphasizes how the design aligns with user needs and business goals, leaving a lasting impression on stakeholders.",
            image: "src/images/Presentation ui.webp", // Replace with actual image URL
        },
        {
            id: 2,
            title: "Cisco Workshops:",
            description:
                "Cisco workshops are designed to equip participants with practical skills and expertise in networking technologies. These sessions cover essential topics such as network configuration, security protocols, and troubleshooting techniques using Cisco systems. With hands-on training and real-world scenarios, attendees gain the knowledge needed to excel in managing modern IT infrastructures, preparing them for industry-recognized certifications and career advancement opportunities.",
            image: "src/images/CISCO.jpg", // Replace with actual image URL
        },
        {
            id: 3,
            title: "Hackathons and Seminars",
            description:
                "Saylani Mass IT Training (SMIT) Gulshan Campus in Karachi is a hub for innovative learning, offering cutting-edge IT courses tailored to meet industry demands. The campus provides training in fields like Web and Mobile App Development, Graphic Designing, Artificial Intelligence, Networking (CCNA), and more. With state-of-the-art facilities, expert trainers, and a focus on practical learning, SMIT equips students with the skills needed for a successful career in the tech industry. ",
            image: "src/images/hacjathon.jpeg", // Replace with actual image URL
        },
       

    ];

    return (
        <div className=" bg-gray-50  shadow-lg rounded-lg p-8 "><hr /><br />
            <h1 className="font-serif text-headingColor text-lg md:text-2xl lg:text-3xl mb-4 text-center">
                Campus Activities
            </h1>
            <br />
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

export default CampusActivities;
