import Image from 'next/image'
import React from 'react'
import Content from './wordsOfWestero/page'

export default function Home() {
  return (
    <main className=''>
      <div className='w-fit text-center text-4xl font-extrabold ml-auto mr-auto mt-5 mb-5'>
            <h1 className='bg-gradient-to-r from-black via-red-500 to-black inline-block text-transparent bg-clip-text m-5 font-extrabold it'>Words of Westeros</h1>
      </div>
      <Content />
    </main>
  )
}
