const LoginFeild = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8">
              <h4 className="font-serif text-headingColor text-lg md:text-2xl lg:text-3xl mb-4">
                Login to Your Account
              </h4>
              <form className="space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between">
                {/* Email Input */}
                <div className="lg:flex-1 lg:mr-4">
                  <label
                    className="text-subHeadingColor block font-medium mb-1 lg:mb-0"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                {/* Password Input */}
                <div className="lg:flex-1 lg:mr-4">
                  <label
                    className="text-subHeadingColor block font-medium mb-1 lg:mb-0"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                  />
                </div>
                {/* Submit Button */}
                <div className="lg:w-auto">
                  <button
                    type="submit"
                    className="w-full lg:w-auto bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-600 transition"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>

  );
};

export default LoginFeild
