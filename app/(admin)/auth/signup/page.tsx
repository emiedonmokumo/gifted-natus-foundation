'use client'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const page = () => {
    const [user, setUser] = useState({ email: '', password: '', confirmPassword: '' });
    const [error, setError] = useState('');
    const router = useRouter();

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const submitHandler = async (e: any) => {
        e.preventDefault();
        if (user.password !== user.confirmPassword) {
            setError("Passwords don't match");
            return;
        }
        try {
            await axios.post('/api/auth/signup', {
                credentials: {
                    email: user.email,
                    password: user.password
                },
            });
            router.push('/auth/login');
        } catch (err) {
            console.log(err)
            setError('Signup failed. Please try again.');
        }
    };

    return (
        <div className="bg-gray-200 w-full h-screen flex justify-center items-center">
            <div className="w-full max-w-xs mx-auto mt-10 sm:max-w-sm md:max-w-md">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-gray-900 text-3xl font-bold text-center mb-6">Sign up</h1>
                    {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
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
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm uppercase tracking-wide font-bold mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password..."
                            name="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-blue-800"
                            id="password"
                            onChange={handleChange}
                            value={user.password}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm uppercase tracking-wide font-bold mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm your password..."
                            name="confirmPassword"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-blue-800"
                            id="confirmPassword"
                            onChange={handleChange}
                            value={user.confirmPassword}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            onClick={submitHandler}
                            type="button"
                            className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default page;
