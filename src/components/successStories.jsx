import React from "react";

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      title: "Success Story 1",
      description:
        "This is a short description of success story 1. It highlights the achievement and the positive impact it had on the community.",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
    {
      id: 2,
      title: "Success Story 2",
      description:
        "This is a short description of success story 2. It showcases the progress made and the journey toward success.",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
    {
      id: 3,
      title: "Success Story 3",
      description:
        "This is a short description of success story 3. It reflects the challenges faced and how they were overcome.",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
    {
      id: 4,
      title: "Success Story 1",
      description:
        "This is a short description of success story 1. It highlights the achievement and the positive impact it had on the community.",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
    {
      id: 5,
      title: "Success Story 2",
      description:
        "This is a short description of success story 2. It showcases the progress made and the journey toward success.",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
    {
      id: 6,
      title: "Success Story 3",
      description:
        "This is a short description of success story 3. It reflects the challenges faced and how they were overcome.",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
  ];

  return (
    <div className=" bg-gray-50  shadow-lg rounded-lg p-8 ">
      <h2 className="font-serif text-headingColor text-lg md:text-2xl lg:text-3xl mb-4">
        Success Stories
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

export default SuccessStories;
