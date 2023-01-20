import Image from 'next/image'
import React from 'react'

const TrackTileRounded = () => {
    return (
        <div className='min-w-[144px] mr-6 items-center justify-center'>
            <div className='w-36 rounded-xl m-auto h-36 relative'>
                <Image
                    className='object-cover rounded-full'
                    src={'/feat.png'}
                    alt='feat img'
                    fill
                />
            </div>
            <h1 className='font-bold text-center text-sm mt-2'>Sucker</h1>

        </div>
    )
}

export default TrackTileRounded