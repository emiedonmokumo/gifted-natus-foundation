"use client";
import { useState, ChangeEvent } from "react";
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";

type User = {
  email: string;
  password: string;
};

function Page() {
  const router = useRouter();
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // State for loading

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const submitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true); // Set loading to true
    try {
      const response = await signIn('credentials', {
        email: user.email,
        password: user.password,
        redirect: false        
      });
      
      if (response?.ok) {
        // Handle successful login
        console.log("Login successful");
        router.push("/dashboard");
      } else {
        // Handle error response
        console.error("Login failed");
        alert("Login failed")
      }
    } catch (error) {
      setLoading(false)
      console.error("An error occurred:", error);
    }
  };

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
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-blue-800"
              id="email"
              onChange={handleChange}
              value={user.email}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm uppercase tracking-wide font-bold mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password..."
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-blue-900"
              id="password"
              name="password"
              onChange={handleChange}
              value={user.password}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={submitHandler}
              type="button"
              disabled={loading} // Disable button while loading
              className={`${
                loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-900"
              } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
