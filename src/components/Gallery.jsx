import React from "react";

const Gallery = () => {
    const stories = [
        {
            image: "src/images/Gallery Section/1.jpeg", // Replace with actual image URL
        },
        {
            image: "src/images/Gallery Section/2.jpeg", // Replace with actual image URL
        },
        {
            image: "src/images/Gallery Section/3.jpeg", // Replace with actual image URL
        },
        {
            image: "src/images/Gallery Section/4.jpeg", // Replace with actual image URL
        },
        {
            image: "src/images/Gallery Section/5.jpeg", // Replace with actual image URL
        },
        {
            image: "src/images/Gallery Section/6.jpeg", // Replace with actual image URL
        },
        {
            image: "src/images/Gallery Section/7.jpeg", // Replace with actual image URL
        },
        {
            image: "src/images/Gallery Section/8.jpeg", // Replace with actual image URL
        },
        {
            image: "src/images/Gallery Section/9.jpeg", // Replace with actual image URL
        },
        {
            image: "src/images/Gallery Section/10.jpeg", // Replace with actual image URL
        },
        {
            image: "src/images/Gallery Section/11.jpeg", // Replace with actual image URL
        },
        {
            image: "src/images/Gallery Section/12.jpeg", // Replace with actual image URL
        },

    ];

    return (
        <div className=" bg-gray-50  shadow-lg rounded-lg p-8 "><hr /><br />
            <h1 className="font-serif text-headingColor text-headingColor text-lg md:text-2xl lg:text-3xl mb-4 text-center">
                Gallery
            </h1>
            <br />
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                        <hr /><br />
                    </div>
                ))}
            </div>
        </div> 
    ); 
};

export default Gallery;
