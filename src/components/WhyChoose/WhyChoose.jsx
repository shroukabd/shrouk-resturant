import React from 'react'
import { FaBus } from "react-icons/fa";

const WhyChoose = () => {
  return (
    <>
      <div className='py-14 md:py-28
      bg-gray-50'>
            <div className="container">
                {/* hidding section */}
                <h1 className='py-8 tracking-wider
                        text-2xl font-semibold 
                        text-dark text-center'>Why Choose Us
                        </h1>
                    {/* card section */}
                    <div>
                        <div className='grid grid-cols-2 md:grid-cols-4
                        gap-14 sm:gap-4'>
          {/*    first card */}
                      <div className='text-center flex 
                      justify-center items-center flex-col
                      gap-2 px-2' 
                      data-aos="fade-up"
                     data-aos-duration="1000">
                        <p className='text-dark/70 font-semibold'>
                            Lorem ipsum dolor sit amet consectetur
                             adipisicing elit.
                        </p>
                        <p className='text-5xl rotate-90
                        text-pink translate-x-5'>....</p>
                    <FaBus className='text-5xl text-pink'/>
                      </div>

                      {/* second card */}
                      <div className='text-center flex 
                      justify-center items-center flex-col
                      gap-2 px-2'
                      data-aos="fade-up"
                  data-aos-duration="1500">
                          <FaBus className='text-5xl text-secondary'/>
                          <p className='text-5xl rotate-90
                        text-pink translate-x-5'>....</p>
                        <p className='text-dark/70 font-semibold'>
                            Lorem ipsum dolor sit amet consectetur
                             adipisicing elit.
                        </p>
                      </div>
                      {/* third card */}
                      <div className='text-center flex 
                      justify-center items-center flex-col
                      gap-2 px-2'
                      data-aos="fade-up"
                     data-aos-duration="2000">
                        <p className='text-dark/70 font-semibold'>
                            Lorem ipsum dolor sit amet consectetur
                             adipisicing elit.
                        </p>
                        <p className='text-5xl rotate-90
                        text-pink translate-x-5'>....</p>
                    <FaBus className='text-5xl text-pink'/>
                      </div>
                      {/* fourth card */}
                      <div className='text-center flex 
                      justify-center items-center flex-col
                      gap-2 px-2'
                      data-aos="fade-up"
            data-aos-duration="3000">
                          <FaBus className='text-5xl text-secondary'/>
                          <p className='text-5xl rotate-90
                        text-pink translate-x-5'>....</p>
                        <p className='text-dark/70 font-semibold'>
                            Lorem ipsum dolor sit amet consectetur
                             adipisicing elit.
                        </p>
                      </div>
                        </div>
                    </div>
            </div>
      </div>
    </>
  )
}

export default WhyChoose
