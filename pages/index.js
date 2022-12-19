import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Sidebar from '../components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Whatsapp Amharic Version</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>      

      <Sidebar />
    </>
  )
}
