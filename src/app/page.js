import Image from 'next/image'
import React from 'react'
import LogoContainer from './logoContainer/page'

export default function Home() {
  return (
    <main>
      <div className='w-fit text-center text-4xl font-extrabold ml-auto mr-auto mt-5 mb-5'>
            <h1 className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Words of Westeros</h1>
      </div>
      <LogoContainer />
    </main>
  )
}
