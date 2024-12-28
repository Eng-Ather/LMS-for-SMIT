export default function Courses() {
    return (
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Courses</h2>
          <button className="text-blue-500">View all</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
                Professional Plan
              </div>
              <button className="text-gray-500">
                •••
              </button>
            </div>
            <h3 className="font-medium text-lg mb-4">AI Chatbot Development</h3>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              <span className="text-sm text-gray-600">Pankaj Suthar</span>
            </div>
            <img src="/path-to-your-image/ai-chatbot.jpg" alt="AI Chatbot" className="w-full h-40 object-cover mb-4" />
            <button className="w-full flex justify-between items-center text-blue-500 hover:text-blue-600">
              View
              <span>→</span>
            </button>
          </div>
  
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
                Professional Plan
              </div>
              <button className="text-gray-500">
                •••
              </button>
            </div>
            <h3 className="font-medium text-lg mb-4">Web & App Development</h3>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              <span className="text-sm text-gray-600">Pankaj Suthar</span>
            </div>
            <img src="/path-to-your-image/web-app-development.jpg" alt="Web & App Development" className="w-full h-40 object-cover mb-4" />
            <button className="w-full flex justify-between items-center text-blue-500 hover:text-blue-600">
              View
              <span>→</span>
            </button>
          </div>
  
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
                Professional Plan
              </div>
              <button className="text-gray-500">
                •••
              </button>
            </div>
            <h3 className="font-medium text-lg mb-4">Graphic Design</h3>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              <span className="text-sm text-gray-600">Pankaj Suthar</span>
            </div>
            <img src="/path-to-your-image/graphic-design.jpg" alt="Graphic Design" className="w-full h-40 object-cover mb-4" />
            <button className="w-full flex justify-between items-center text-blue-500 hover:text-blue-600">
              View
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
  