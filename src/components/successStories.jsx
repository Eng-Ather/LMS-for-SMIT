import React, { useState } from "react";

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      title: "Success Story 1",
      description:
        "This is a short description of success story 1. It highlights the achievement and the positive impact it had on the community.",
      image: "https://via.placeholder.com/250x150",
    },
    {
      id: 2,
      title: "Success Story 2",
      description:
        "This is a short description of success story 2. It showcases the progress made and the journey toward success.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      title: "Success Story 3",
      description:
        "This is a short description of success story 3. It reflects the challenges faced and how they were overcome.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 4,
      title: "Success Story 4",
      description:
        "This is a short description of success story 4. It demonstrates the creative solutions implemented to achieve success.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 5,
      title: "Success Story 5",
      description:
        "This is a short description of success story 5. It highlights the teamwork and effort involved.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 6,
      title: "Success Story 6",
      description:
        "This is a short description of success story 6. It emphasizes the importance of perseverance.",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [expandedStory, setExpandedStory] = useState(null);
  const storiesPerPage = 4;

  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = stories.slice(indexOfFirstStory, indexOfLastStory);

  const handleToggleDescription = (id) => {
    setExpandedStory(expandedStory === id ? null : id);
  };

  const totalPages = Math.ceil(stories.length / storiesPerPage);

  return (
    <div className="bg-gray-50 shadow-lg rounded-lg p-8">
      <h2 className="font-serif text-headingColor text-lg md:text-2xl lg:text-3xl mb-4">
        Success Stories
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {currentStories.map((story) => (
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
              <p className="text-gray-600 text-base">
                {expandedStory === story.id
                  ? story.description
                  : `${story.description.substring(0, 50)}...`}
              </p>
              <button
                onClick={() => handleToggleDescription(story.id)}
                className="mt-2 text-blue-500 hover:underline"
              >
                {expandedStory === story.id ? "View Less" : "View More"}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-700 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SuccessStories;
