import React from 'react'
import Image from 'next/image'

//some kind of animation like a roket landing on the moon or an astronaut 
// or the star could be could to be added in the future

//V.1 --> A text that present me and an image svg 

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='bg-gray-800 h-svh'>
      <div className='flex flex-row gap-2 justify-center-safe'>
        <div className='text-gray-300 text-4xl mt-40'>
          <h1 className='font-extrabold text-cyan-600'>
            I am Rodrigo
          </h1>
          <h3>
            A fullstack developer
          </h3>
        </div>
        <Image
        src="/luna.png"
        alt="the moon"
        width={400}
        height={400}
        className='mt-30 ml-40'
        />
      </div>
    </div>
  )
}

export default Hero