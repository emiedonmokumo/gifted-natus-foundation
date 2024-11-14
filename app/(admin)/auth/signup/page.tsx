'use client'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const page = () => {
    const [step, setStep] = useState(1);
    const [user, setUser] = useState({
        firstName: '',
        surname: '',
        othernames: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const router = useRouter();

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const nextStep = () => {
        setError('');
        setStep(step + 1);
    };

    const prevStep = () => {
        setError('');
        setStep(step - 1);
    };

    const submitHandler = async (e: any) => {
        e.preventDefault();
        if (user.password !== user.confirmPassword) {
            setError("Passwords don't match");
            return;
        }
        try {
            await axios.post('/api/auth/signup', {
                bio: {
                    firstName: user.firstName,
                    lastName: user.surname,
                    othernames: user.othernames || '', // Optional
                    email: user.email
                },
                credentials: {
                    email: user.email,
                    password: user.password
                },
            });
            router.push('/auth/login');
        } catch (err) {
            console.log(err);
            setError('Signup failed. Please try again.');
        }
    };

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-full max-w-xs mx-auto mt-10 sm:max-w-sm md:max-w-md">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-gray-900 text-3xl font-bold text-center mb-6">Sign up</h1>
                    {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

                    {step === 1 && (
                        <>
                            <div className="mb-2">
                                <label className="block text-gray-700 text-sm uppercase tracking-wide font-bold mb-1">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your first name..."
                                    name="firstName"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-blue-800"
                                    onChange={handleChange}
                                    value={user.firstName}
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-gray-700 text-sm uppercase tracking-wide font-bold mb-1">
                                    Surname
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your surname..."
                                    name="surname"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-blue-800"
                                    onChange={handleChange}
                                    value={user.surname}
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-gray-700 text-sm uppercase tracking-wide font-bold mb-1">
                                    Other Names (Optional)
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter other names..."
                                    name="othernames"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-blue-800"
                                    onChange={handleChange}
                                    value={user.othernames}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Next
                                </button>
                            </div>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <div className="mb-2">
                                <label className="block text-gray-700 text-sm uppercase tracking-wide font-bold mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email address..."
                                    name="email"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-blue-800"
                                    onChange={handleChange}
                                    value={user.email}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Back
                                </button>
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Next
                                </button>
                            </div>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <div className="mb-2">
                                <label className="block text-gray-700 text-sm uppercase tracking-wide font-bold mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter your password..."
                                    name="password"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-blue-800"
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
                                    onChange={handleChange}
                                    value={user.confirmPassword}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Back
                                </button>
                                <button
                                    type="submit"
                                    onClick={submitHandler}
                                    className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Sign up
                                </button>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default page;
