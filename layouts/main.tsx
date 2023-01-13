import React, { ComponentType } from 'react'
import Image from 'next/image'
import Sidebar from '../components/Containers/Sidebar'
import Header from '../components/Containers/Header'

type Layout = {
  children: React.ReactNode
}

const MainLayout = ({ children }: Layout) => {
  return (
    <div className='flex'>
      {/* sidebar */}
      <Sidebar />
      <div className='w-full'>
        {/* header */}
        <Header />
        {/* children */}
        {children}
      </div>
      {/* bottom bar */}
    </div>
  )
}



export default MainLayout