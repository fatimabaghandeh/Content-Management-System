import React from 'react';

const SignUp = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                <form className="space-y-6">
                    <div className="relative">
                        <span className="fa-solid fa-envelope absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400"></span>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
                        />
                    </div>
                    <div className="relative">
                        <span className="fa-solid fa-lock absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400"></span>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-black text-white py-2 rounded hover:bg-gray-600 transition-colors duration-200 hover:rounded-lg"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
