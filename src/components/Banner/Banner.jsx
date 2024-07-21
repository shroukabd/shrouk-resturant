import React from 'react'
import leaf from '../../assets/leaf.png'
import lemon from '../../assets/lemon.png'
import kiwi from '../../assets/kiwi.png'
import tomato from '../../assets/tomato.png'
import apple from '../../assets/apple.png'
import PrimaryButton from '../Shared/PrimaryButton'


const Banner = () => {
  return (
    <>
      <div className="container py-14 relative overflow-y-hidden">
        <div>
           <h1 className='py-8 tracking-wider
                        text-2xl font-semibold 
                        text-dark text-center'>Taste The Healthy Differance
           </h1>
           <div className='space-y-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2
             gap-4 py-10'>
              <div></div> 
            <div>
         <p data-aos="zoom-in-up">
        {""}
        alias omnis<span className='text-pink'>Tasty</span> consectetur adipisicing 
        elit. Deleniti fugit eius, quia voluptate exercitationem 
        commodi est pariatur hic consequuntur, voluptas quidem.
         Maxime 
        quia, nemo recusandae alias omnis nostrum deleniti ad!
    </p>
      </div>
      
   
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2
             gap-4 py-10'>
       <div>
         <p data-aos="zoom-in-down">
        {""}
        alias omnis<span className='text-pink'>Tasty</span> consectetur adipisicing 
        elit. Deleniti fugit eius, quia voluptate exercitationem 
        commodi est pariatur hic consequuntur, voluptas quidem.
         Maxime 
        quia, nemo recusandae alias omnis nostrum deleniti ad!
    </p>
    </div>
     

            </div>
           </div>
           {/* button section */}
          <div className='flex justify-center mt-10
          sm:mt-14'>
          <PrimaryButton/>
          </div>
        </div>
        {/* bg fruits png */}
        <div className='absolute top-20 -left-20
         sm:button-0 sm:left-0 opacity-50 ml-[10%]
         sm:opacity-100'>
          <img src={lemon} alt="" className='max-w-[160px]'
          data-aos="fade-right"/>
        </div>
     
        <div className=' buttom-16 left-16
         sm:button-0 sm:left-0 opacity-50
         sm:opacity-100'>
          <img src={tomato} alt="" className='max-w-[250px]'
          data-aos="fade-down-right"/>
        </div>
        <div className='absolute top-2 ml-[80%]
         sm:button-0 sm:left-0 opacity-50
         sm:opacity-100'>
          <img src={leaf} alt="" className='max-w-[160px]'
          data-aos="fade-left"/>
        </div>
        <div className='hidden sm:block absolute 
          right-10  opacity-50 px-16 top-[600px]
         sm:opacity-100'>
          <img src={apple} alt="" className='max-w-[200px]'
          data-aos="fade-down-left"/>
        </div>
        <div className='hidden sm:block absolute 
         right-80  opacity-50 top-80 
         sm:opacity-100'>
          <img src={kiwi} alt="" className='max-w-[200px]'
          data-aos="fade-up-left"/>
        </div>
      </div>
    </>
  )
}

export default Banner
