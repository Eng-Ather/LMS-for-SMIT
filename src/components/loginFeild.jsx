const LoginFeild = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8">
      <h4 className="font-serif text-headingColor text-lg md:text-2xl lg:text-3xl mb-4">
        Login to Your Account
      </h4>
      <form className=" lg:flex gap-5 items-end justify-center ">
        {/* Email Input */}
        <div className="">
          <label
            className="text-subHeadingColor block font-medium mb-1"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className="w-full border border-gray-300 rounded-lg p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        {/* Password Input */}
        <div className="">
          <label
            className="text-subHeadingColor block font-medium mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full border border-gray-300 rounded-lg p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full lg:w-auto bg-navbarColor text-white py-2 px-6 mb-2 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginFeild;
