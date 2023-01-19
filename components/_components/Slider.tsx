import React from 'react'
import Image from 'next/image'


const Slider = () => {
    return (
        <div className='w-full h-[350px] relative'>
            {/* <div>show them</div> */}
            <Image 
            className='object-cover'
                src={'/Slider.png'}
                alt='slider image'
                fill  
            />
        
        </div>
    )
}

export default Slider