import Image from 'next/image'
import React from 'react'
import TrackTile from '../utils/TrackTile'

const Tracks = () => {
    return (
        <div className='block p-5 flex-1'>
            <h1 className='text-base font-bold mb-2'>Featured Tracks</h1>
            <div className='flex overflow-x-auto scrollbar-hide'>
                <TrackTile />
                <TrackTile />
                <TrackTile />
                <TrackTile />
                <TrackTile />
                <TrackTile />
                <TrackTile />
                <TrackTile />
                <TrackTile />
                <TrackTile />
                <TrackTile />
                <TrackTile />
                <TrackTile />
                <TrackTile />
                <TrackTile />
            </div>
        </div>
    )
}

export default Tracks