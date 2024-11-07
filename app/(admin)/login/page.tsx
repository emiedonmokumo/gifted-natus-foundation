function page() {
  return (
    <div className="bg-gray-200 w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-xs mx-auto mt-10 sm:max-w-sm md:max-w-md">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-gray-900 text-3xl font-bold text-center mb-6">
            Sign in
          </h1>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm uppercase tracking-wide font-bold mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address..."
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-indigo-600"
              id="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm uppercase tracking-wide font-bold mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password..."
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-indigo-600"
              id="password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page