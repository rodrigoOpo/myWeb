import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  title: string,
  desc: string,
  image:string
}

const Card = (props: Props) => {

  const fullImageUrl = `http://localhost:8000${props.image}`

  return (
    <Link
    href='/project'
    className='text-gray-300 border-2 border-gray-400 rounded-xl'>
        <img
        src={fullImageUrl}
        alt='descriptive image of project'
        width={200}
        height={200}/>
        <h1 className='text-cyan-600 font-extrabold'>
          {props.title}
        </h1>
        <p>
         {props.desc}
        </p>
    </Link>
  )
}

export default Card