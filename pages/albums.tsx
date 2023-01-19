/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from 'react'
import SongTile from '../components/utils/SongTile';
import FeaturedTrack from '../components/_components/FeaturedTrack';
import MainLayout from '../layouts/main';

const Albums = () => {
  return (
    <main>
      <FeaturedTrack />
      <div className='p-5 flex items-start w-full'>

        <div className='w-[20%] relative '>
          <img className='object-cover w-full ' src="/albumImg.png" alt="album img" />
          <div className='absolute items-center text-center bottom-0 h-20 w-full z-10'>
            <h1 className='text-4xl text-white font-bold'>Clifford</h1>
          </div>
        </div>

        <div className='flex-1 items-center block justify-start px-14 py-10'>
          <p className='font-bold mb-5'>{"//Album"}</p>
          <h1 className='text-4xl xl:text-[60px] font-bold pb-5'>Around The World</h1>
          <h3 className='text-gray-400 text-xl font-bold pb-5'>Akcent Feat. Lidia Buble & DDY Nunes</h3>
          <p className='text-gray-400 w-8/12'>The artists we represent are one of the most successful in Romania and also were a huge
            breakthrough in the internatonal market, topping radio and sales around the world.
          </p>
          <div className='mt-10'>
            <table className='w-full text-sm'>
              <tbody>
                <SongTile
                  index={1}
                  artist={'Claydee feat'}
                  dialyPlay={36000}
                  time={'4:21'}
                  song={'Kamelia'}
                />
                 <SongTile
                  index={2}
                  artist={'Claydee feat'}
                  dialyPlay={36000}
                  time={'4:21'}
                  song={'Kamelia'}
                  isPlaying={true}
                />
                 <SongTile
                  index={3}
                  artist={'Claydee feat'}
                  dialyPlay={36000}
                  time={'4:21'}
                  song={'Kamelia'}
                />
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </main>
  )
}

Albums.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;


export default Albums