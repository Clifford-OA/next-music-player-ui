
import { Inter } from '@next/font/google'
import MainLayout from '../layouts/main'
import { ReactElement } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
      <main >
        clifford
      </main>
  
  )
}

Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

