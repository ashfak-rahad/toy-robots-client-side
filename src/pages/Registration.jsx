import React from 'react';
import logo from "../asset/registation.jpg";
import { AiFillGoogleCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
         {/* login container */}
         <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5'>
            {/* form */}
            <div className='sm:w-1/2 px-16'>
                <h2 className='font-bold text-2xl'>Registration</h2>
                <p className='text-sm mt-4'>If you already a member,easily log in</p>

                <form className='flex flex-col gap-4'>
                    <input className='p-2 mt-8 rounded-xl' type="text" 
                    name='name'
                    placeholder='name'
                    />
                    <input className='p-2  rounded-xl' type="text" 
                    name='email'
                    placeholder='Email'
                    />
                    <input className='p-2  rounded-xl border' type="password"
                    name='password'
                    placeholder='password'
                     />
                    <input className='p-2  rounded-xl border' type="text"
                    name='photo'
                    placeholder='photoURL'
                     />
                    <button className='bg-[#252728] text-white rounded-xl py-2'>Register Now</button>
                </form>
                <div className='mt-10 grid grid-cols-3 items-center text-gray-500'>
                    <hr className='border-gray-400' />
                    <p className='text-center'>OR</p>
                    <hr className='border-gray-400'/>
                </div>
                <button className='bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm '> <span><AiFillGoogleCircle/></span> Login With Google</button>
                <p className='mt-5 text-xs border-b py-6'>Forgot your password?</p>
                <div className=' mt-3 text-sm flex justify-between items-center'>
                    <p>It you don't have an account?</p>
                    <Link to ='/login' className='py-2 px-5 bg-white border rounded-xl'>Login</Link>
                </div>

            </div>
            {/* img */}
            <div className='w-1/2 sm:block hidden'>
                <img className=' rounded-2xl' src={logo} alt="" />
            </div>

         </div>
       </section>
    );
};

export default Registration;