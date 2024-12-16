const Error = () => {
    return (
      <div className=" min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
          <p className="text-lg text-textColor mb-6">
            Sorry, the page you are looking for does not exist .
          </p>
          <a
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Go to Home
          </a>
        </div>
      </div>
    );
  };
  
  export default Error;
  
