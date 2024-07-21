import React from 'react'
import BgAbout from '../../assets/polygon.png'
import victor from '../../assets/vector-wave.png'

import { IoPerson } from 'react-icons/io5'
const About = ({HandlePopup}) => {
    const BgStyle ={
        backgroundImage: `url(${BgAbout})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        hight: "100%",


    }
  return (
    <>
      <div style={BgStyle} className='overflow-y-hidden py-14'>
        <div className="container min-h-[500px] relative 
        z-10">
            <h1 className='pt-20 tracking-wider text-4xl
            font-bold text-white text-center'>About Us
            </h1>
            {/* card section */}
            <div className='bg-white/80 p-10 my-10'
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Illum cum quo impedit itaque accusantium quas excepturi
                      reiciendis laudantium eos eius ab, perspiciatis,
                     nisi mollitia? Facilis vel rerum laudantium totam tempore. 
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Molestias veniam est totam autem, cumque fuga asperiores
                       facilis commodi ducimus quasi
                      dignissimos hic itaque ipsam! Eum 
                      quis rem quos quia cum! Lorem ipsum dolor sit amet
                       consectetur adipisicing elit. Asperiores illo perferendis
                        magni veniam incidunt deleniti! Tempore dolor fugit maxime ex, sequi dignissimos ut aspernatur
                       reprehenderit, consequuntur odio dicta debitis beatae.
                      </p>
                      <div className='pt-10 flex justify-center'>
                      <button
                      onClick={HandlePopup}
                      className='flex justify-center items-center gap-2
                            bg-pink text-xl h-[40px] text-white px-5 py-2
                            hover:scale-105 duration-300'>
                              <IoPerson/>
                              My Account
                            </button>
                      </div>
            </div>
        </div>
                 {/* wave victor */}
                 <div>
                    <img src={victor} alt="" className='absolute
                   top-[2000px] right-0 w-full max-auto'/>
                 </div>

      </div>
    </>
  )
}

export default About
