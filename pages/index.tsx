import Navbar from '../components/Navbar'

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Profile Home</title>
        <meta name="description" content="Welcome to my home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='antialiased'>
        <Navbar/>
        <div className='drawer-side scroll-smooth scroll-pt-20'>
          <label htmlFor='drawer' className='drawer-overlay'></label>
          <aside className='bg-base-200 w-80'>
            <div className='class="z-20 bg-base-200 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 px-4 py-2 hidden'>
              
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}

export default Home
