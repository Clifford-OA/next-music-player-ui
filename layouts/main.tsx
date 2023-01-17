import React, { ComponentType } from 'react'
import Image from 'next/image'
import Sidebar from '../components/Containers/Sidebar'
import Header from '../components/Containers/Header'
import Head from 'next/head'

type Layout = {
  children: React.ReactNode
}

const MainLayout = ({ children }: Layout) => {
  return (
    <>
      <Head>
        <title>Music Player</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex h-full relative container'>
        {/* sidebar */}
        <Sidebar />
        <div className='relative w-[86%]'>
          {/* header */}
          <Header />
          {/* children */}
          <div className='w-full'>
            {children}
          </div>
        </div>
        {/* bottom bar */}
      </div>
    </>
  )
}



export default MainLayout