/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from 'react'
import TrackTileRounded from '../components/utils/TrackTileRounded'
import MainLayout from '../layouts/main'

const Artists = () => {
    const musicsGenre: string[] = ['Blues', 'Classical', 'Country', 'Dance', 'Electronics',
        'Hip-Hop', 'Jazz', 'Latin', 'Metal', 'Party', 'R&B / Soul', 'Reggae / Dacehall',
        'Soundtracks', 'World']
    return (
        <main>
            <div className='block pl-7 py-7 pr-3'>

                <div className='flex h-[400px] overflow-x-auto  w-full relative'>

                    <div className=' h-full w-4/5'>
                        <img className='object-cover h-full w-full rounded-md' src="/frame.png" alt="frame" />
                    </div>


                    <div className='flex-1 h-full block ml-10'>
                        <div className='mb-5 h-[185px]'>
                            <img className='object-cover w-full h-full rounded-md'
                                src="/frame_top.png" alt="top banner" />
                        </div>
                        <div className='h-[185px]'>
                            <img className='object-cover w-full h-full rounded-md'
                                src="/frame_bottom.png" alt="bottom banner" />
                        </div>
                    </div>


                </div>

                <div className='mt-5'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-base font-bold mb-2'>Filter Artist</h1>
                        <div className='flex text-sm items-center justify-between w-1/5'>
                            <h1 className='text-red-700'>Week</h1>
                            <h1>Month</h1>
                            <h1>Year</h1>
                        </div>
                    </div>

                    <div className='mt-7 w-full'>
                        <div className='flex flex-wrap items-center justify-start'>
                            {musicsGenre.map((item, index) => (
                                <button className='px-5 py-2 border-2 rounded-lg  border-black  text-sm mr-5 my-2' key={index}>{item}</button>
                            ))}
                        </div>
                    </div>

                    <div className='block mt-10'>                        
                        <div className='flex overflow-x-auto scrollbar-hide'>
                            <TrackTileRounded />
                            <TrackTileRounded />
                            <TrackTileRounded />
                            <TrackTileRounded />
                            <TrackTileRounded />
                            <TrackTileRounded />
                            <TrackTileRounded />
                            <TrackTileRounded />
                            <TrackTileRounded />
                            <TrackTileRounded />
                            <TrackTileRounded />
                            <TrackTileRounded />
                            <TrackTileRounded />
                            <TrackTileRounded />
                            <TrackTileRounded />
                        </div>
                    </div>



                </div>

            </div>
        </main>
    )
}

Artists.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Artists