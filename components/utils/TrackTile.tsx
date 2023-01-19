import Image from 'next/image'
import React from 'react'

const TrackTile = () => {
    return (
        <div className='w-44 min-w-[176px] mr-6'>
            <div className='w-full rounded-xl h-36 relative'>
                <Image
                    src={'/feat.png'}
                    alt='feat img'
                    fill
                />
            </div>
            <h1 className='font-bold text-sm mt-2'>Sucker</h1>
            <p className='text-gray-400 text-xs mt-2'>Jonas Brothers</p>

        </div>
    )
}

export default TrackTile