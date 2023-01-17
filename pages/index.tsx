
import { Inter } from '@next/font/google'
import MainLayout from '../layouts/main'
import { ReactElement } from 'react'
import Slider from '../components/_components/Slider'
import Tracks from '../components/_components/Tracks'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <main >
      <Slider />
      <Tracks />
    </main>

  )
}

Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

