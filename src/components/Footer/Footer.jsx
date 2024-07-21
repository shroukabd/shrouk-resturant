import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className='text-white mt-20 overflow-y-hidden '>
        <div className="container bg-gradient-to-b
        from-pink to-primaryDark rounded-t-3xl h-[60vh]">
          
            <div>
                <h1 className='py-10  text-3xl font-bold
                text-yellow text-center'>Contact Us</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2
                md:grid-cols-3 gap-14 border-b-2 border-white
                pb-6">
                    <div className='text-center space-y-4'
                    data-aos="fade-up"
                    data-aos-duration="1000">
                        <div className='flex justify-center'>
                     <IoLocationSharp className='text-4xl'/>
                        </div>
                        <p>Egypt , sharqia , Zagazige</p>
                    </div>
                    <div className='text-center space-y-4'
                    data-aos="fade-up"
                    data-aos-duration="2000">
                    <div className='flex justify-center'>
                        <MdEmail className='text-4xl'/>
                    </div>
                   <p> shroukmohamed4433117@gmail.com

                   </p>
                   </div>
                   <div className='text-center space-y-4'
                   data-aos="fade-up"
                   data-aos-duration="3000">
                    <div className='flex justify-center'>
                        <FaPhone className='text-4xl'/>
                    </div>
                   <p> 12345678901 </p>
                   <p> 12345678901 whatsApp
                        </p>
                    
                   </div>
                </div>
            </div>

        </div>

      </div>
    </>
  )
}

export default Footer
