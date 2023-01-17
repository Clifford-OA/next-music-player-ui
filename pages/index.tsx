
import { Inter } from '@next/font/google'
import MainLayout from '../layouts/main'
import { ReactElement } from 'react'
import Slider from '../components/_components/Slider'
import FeaturedTrack from '../components/_components/FeaturedTrack'
import TopTracks from '../components/_components/TopTracks'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <main >
      <Slider />
      <FeaturedTrack />
      <TopTracks />
    </main>

  )
}

Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

