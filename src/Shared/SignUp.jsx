import React from 'react';
import signUp from '../assets/register.jpeg';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="font-[sans-serif] text-[#333] bg-white min-h-screen p-4 flex flex-col justify-center items-center">
            <div className="md:grid md:grid-cols-2 w-full max-w-6xl gap-8">
                <div className="w-full flex flex-col justify-center items-center p-8">
                    <img src={Logo} className="w-2/5 md:w-1/4 object-contain mb-4" alt="logo" />
                    <img src={signUp} className="w-full h-auto object-contain" alt="sign-up" />
                </div>
                <form className="max-w-md w-full mx-auto mt-8 md:mt-0">
                    <div className="mb-12 text-center">
                        <h3 className="text-primary text-3xl md:text-4xl font-extrabold">Sign Up</h3>
                        <p className="mt-3 text-primary">Create Your Account and Start Investing Today</p>
                    </div>
                    <div className="bg-bg2 p-6 md:p-8 rounded-3xl">
                        <div className="mb-6">
                            <label htmlFor="userId" className="block text-[#CB0881] mb-2">User ID</label>
                            <input 
                                id="userId" 
                                name="userId" 
                                type="text" 
                                required 
                                className="w-full text-sm border-b border-gray-300 bg-bg2 focus:border-blue-600 py-3 outline-none" 
                                placeholder="Enter user ID" 
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="fullName" className="block text-[#CB0881] mb-2">Full Name</label>
                            <input 
                                id="fullName" 
                                name="fullName" 
                                type="text" 
                                required 
                                className="w-full text-sm border-b border-gray-300 bg-bg2 focus:border-blue-600 py-3 outline-none" 
                                placeholder="Enter your name" 
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-[#CB0881] mb-2">Email</label>
                            <input 
                                id="email" 
                                name="email" 
                                type="email" 
                                required 
                                className="w-full text-sm border-b border-gray-300 bg-bg2 focus:border-blue-600 py-3 outline-none" 
                                placeholder="Enter your email" 
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="referralId" className="block text-[#CB0881] mb-2">Referral ID</label>
                            <input 
                                id="referralId" 
                                name="referralId" 
                                type="text" 
                                className="w-full text-sm border-b border-gray-300 bg-bg2 focus:border-blue-600 py-3 outline-none" 
                                placeholder="Enter referral ID (optional)" 
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="phone" className="block text-[#CB0881] mb-2">Phone</label>
                            <input 
                                id="phone" 
                                name="phone" 
                                type="tel" 
                                required 
                                className="w-full text-sm border-b border-gray-300 bg-bg2 focus:border-blue-600 py-3 outline-none" 
                                placeholder="Enter your phone number" 
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-[#CB0881] mb-2">Password</label>
                            <div className="relative">
                                <input 
                                    id="password" 
                                    name="password" 
                                    type="password" 
                                    required 
                                    className="w-full text-sm border-b border-gray-300 bg-bg2 focus:border-blue-600 py-3 outline-none" 
                                    placeholder="Enter password" 
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 top-3 cursor-pointer" viewBox="0 0 128 128">
                                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="confirmPassword" className="block text-[#CB0881] mb-2">Confirm Password</label>
                            <div className="relative">
                                <input 
                                    id="confirmPassword" 
                                    name="confirmPassword" 
                                    type="password" 
                                    required 
                                    className="w-full text-sm border-b border-gray-300 bg-bg2 focus:border-blue-600 py-3 outline-none" 
                                    placeholder="Confirm your password" 
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 top-3 cursor-pointer" viewBox="0 0 128 128">
                                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center mb-6">
                            <input id="terms" name="terms" type="checkbox" required className="h-4 w-4 text-primary focus:ring-blue-500 border-gray-300 rounded" />
                            <label htmlFor="terms" className="ml-3 text-[#CB0881] text-sm">
                                I agree to the <span className="text-primary">terms and conditions</span>
                            </label>
                        </div>
                        <div className="mt-12 grid justify-center">
                            <button type="button" className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-primary hover:bg-blue-700 focus:outline-none">
                                Sign Up
                            </button>
                            <p className="text-sm text-center mt-8">Already have an account? <Link to="/login" className="text-primary font-semibold hover:underline ml-1">Log in</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
