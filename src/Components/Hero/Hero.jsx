import React from 'react'
import HeroPng from "../../assets/hero.png";
import { BiPlayCircle } from 'react-icons/bi';

export default function Hero() {
  return (
    <>
      <div className='py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden'>
        <div className='container min-h-[700px] flex relative'>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative">
             {/* Hero Text Section */}
             <div className=' order-2 space-y-5 lg:pr-20'>
               <h1 className='text-4xl font-semibold'>
                GET READY TO ENJOY VR  <span className='bg-clip-text
                text-transparent bg-gradient-to-r from-primary to-secondary'>
                  GAMES WITH OUR PLATFORM</span>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                     adipisicing elit. Unde alias molestiae nostrum voluptas vel dicta quis velit laboriosam tempora molestias ratione, corrupti 
                    quidem odit deserunt eum incidunt eos ex. Odit.
                  </p>

                  <div className='flex gap-6'>
                    <button className='primary-btn'>Get Started</button>
                    <button className='flex items-center gap-2'> 
                      {" "}
                      <BiPlayCircle className='text-3x'/>
                      See Demo
                    </button>
                  </div>
             </div>
            {/* image Section */}
            <div className='order-1 sm:order-2'>
              <img src={HeroPng} alt="" />
            </div>
           
          </div>

          {/* Animated Blob */}
          <div className='h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary  
          rounded-full absolute top-0 left-0 blur-3xl animated-wrapper '></div>
        </div>
      </div>
    </>
  );
}
