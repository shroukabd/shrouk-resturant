import React from 'react'
import HeroBg from '../../assets/heroBg.png'
import hero from '../../assets/hero.png'
import PrimaryButton from '../Shared/PrimaryButton'
const Hero = () => {
    const BgStyle ={
        backgroundImage: `url(${HeroBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        hight: "150vh",


    }
  return (
    <div style={BgStyle} className='relative z-[-1] overflow-hidden'>
        <div className="container py-16 sm:py-0">
            <div className="grid grid-cols-1
            sm:grid-cols-2 gap-4 place-items-center
            min-h-[600px]">
               
               {/* text content section */}
               <div className='space-y-7 text-dark
               order-1 sm:order-2'
               >
                <h1 className='text-5xl'
                data-aos="fade-up"
                data-aos-duration="3000">Fresh & Healthy<br/> Meal Plan 
                    <span className='text-secondary
                    font-cursive text-7xl'>Delevery</span> in <br/> Miami
                </h1>
                <p className='lg:pr-64'
                data-aos="fade-right">Delicious Meal Dlevared to your Door
                    from $132.95 per week
                </p>
                {/* button section */}
                <PrimaryButton/>
               </div>
              {/* image section */}
                   <div className='relative z-30 order-1 sm:order-2'>
                    <img src={hero} alt="" className='w-full sm:scale-110
                    sm:translate-y-16'
                    data-aos="zoom-in"/>
                   </div>

            </div>
        </div>
      
    </div>
  )
}

export default Hero
