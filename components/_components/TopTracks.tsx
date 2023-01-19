import React from 'react'
import SongTile from '../utils/SongTile'

const TopTracks = () => {
    return (
        <div className='block p-5 flex-1'>
            <h1 className='text-base font-bold'>Top Tracks</h1>
            <table className='w-full text-sm mt-3'>
                <thead>
                    <tr className='font-bold'>
                        <th className='text-left p-2'>#</th>
                        <th className='text-left p-2'></th>
                        <th className='text-left p-2'>Song</th>
                        <th className='text-left p-2'>Artist</th>
                        <th className='text-left p-2'>Daily Plays</th>
                        <th className='text-left p-2'>Time</th>
                        <th className='text-left p-2'>Option</th>
                    </tr>
                </thead>
                <tbody>
                    <SongTile
                        index={1}
                        artist={'Claydee feat'}
                        dialyPlay={36000}
                        time={'4:21'}
                        song={'Kamelia'}
                    />
                     <SongTile
                        index={1}
                        artist={'Claydee feat'}
                        dialyPlay={36000}
                        time={'4:21'}
                        song={'Kamelia'}
                        isPlaying={true}
                    />
                     <SongTile
                        index={1}
                        artist={'Claydee feat'}
                        dialyPlay={36000}
                        time={'4:21'}
                        song={'Kamelia'}
                    />
                </tbody>
            </table>

        </div>
    )
}

export default TopTracks