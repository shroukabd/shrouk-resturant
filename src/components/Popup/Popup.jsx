import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";

const Popup = ({showPopup , setShowPopup}) => {
  return (
    <>
       {
        showPopup && (
            <div>
                <div className="h-screen w-screen fixed top-0
                left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className='fixed top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2 p-4
            shadow-md bg-white rounded-md duration-200
            w-[300px]'>
                {/* Header section */}
                <div className="flex items-center justify-between">
              
              <div className=''>
              <h1 className='text-2xl font-bold text-dark'>Login
                </h1>
                  </div>
                    <div>
                    <IoCloseOutline className='text-2xl cursor-pointer'
                    onClick={()=> setShowPopup(false)}/>
                   </div>
                </div>
                {/* login from section */}
                <div className='mt-4'>
                    <input type="email" placeholder='Your Email'
                    className='w-full rounded-md border border-gray-300
                    dark:border-gray-500 px-2 py-1 mb-4' />

                 <input type="password" placeholder='Your password'
                    className='w-full rounded-md border border-gray-300
                    dark:border-gray-500 px-2 py-1 mb-4' />
              
              {/* login button section */}
              <div>
                <button className='w-full bg-pink text-white
                p-2 rounded-md hover:bg-primaryDark' 
                onClick={() =>setShowPopup(false)}>
                    Login Now
                </button>
              </div>
              {/* section login */}
              <div className='mt-4'>
             <p className='text-center font-semibold'>
                Or Login With</p>
                <div className='flex justify-center gap-2 mt-2'>
                  <FaFacebook className='text-2xl hover:text-blue-500
                  duration-200 cursor-pointer'/>
                  <FaGoogle className='text-2xl hover:text-red-500
                  duration-200 cursor-pointer'/>
                </div>
              </div>
                </div>
            </div> 
                </div>
                
            </div>
        )
       }
    </>
  )
}

export default Popup
