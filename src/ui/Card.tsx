import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Card = (props: Props) => {
  return (
    <Link
    href='/project'
    className='text-gray-300 border-2 border-gray-400 rounded-xl'>
        <Image
        src="globe.svg"
        alt='globe'
        width={200}
        height={200}/>
        <h1 className='text-cyan-600 font-extrabold'>
          this is the card that will display the demo of the project
        </h1>
        <p>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Distinctio est eos exercitationem inventore, cumque saepe!
         Atque, expedita eum repellendus adipisci assumenda minus laudantium,
         reprehenderit eveniet tenetur, magnam aperiam similique dolorum?
        </p>
    </Link>
  )
}

export default Card