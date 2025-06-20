import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';
import Registered from"..//assets/Register.png";
import { registerUser } from '../redux/slices/authSlice';
import { useDispatch } from "react-redux";


const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState(""); // Corrected useState for email
    const [password, setPassword] = useState(""); // Corrected useState for password
    const dispatch = useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(registerUser({name,email,password}));

    };
 
    return (
        <div className='flex'>
            <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12'>
                <form  onSubmit= {handleSubmit}className='w-full max-w-md bg-white p-8 rounded-lg border shadow-sm'>
                    <div className='flex justify-center mb-6'>
                        <h2 className='text-xl font-medium'>NMIT</h2>
                    </div>
                    <h2 className='text-2xl font-bold text-center mb-6'>Hey There!</h2>
                    <p className='text-center mb-6'>Enter your username and password to Login</p>
                    <div className='mb-4'>
                        <label className='block text-sm font-semibold mb-2'>Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)} // Fixed onChange for email
                            className='w-full p-2 border rounded'
                            placeholder='Enter your Name'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-sm font-semibold mb-2'>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Fixed onChange for email
                            className='w-full p-2 border rounded'
                            placeholder='Enter your email address'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-sm font-semibold mb-2'>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Fixed onChange for password
                            className='w-full p-2 border rounded'
                            placeholder='Enter your password'
                        />
                    </div>
                    <div className='text-center'>
                        <button
                            type="submit"
                            className='w-full bg-blue-500 text-white p-2 rounded-lg'
                        >
                            Sign Up
                        </button>
                        <p className="mt-6 text-center text-sm">
                            Don't have an account?{" "}
                            <Link to = "/login" className = "text-blue-500">
                            Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>

            <div className="hidden md:block  h-75 w-1/2 bg-white">
            <div className="h-63 flex flex-col justify-center items-center">
                <img src={Registered} alt="Login to Account" className="h-63 w-full object-cover" />
            </div>
            
            </div>
        </div>
    );
};

export default Register;