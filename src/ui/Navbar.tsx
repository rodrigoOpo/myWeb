import React from 'react'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='text-white font-extrabold h-15 w-full fixed z-20'>
      <div className='flex flex-row gap-6 m-4 justify-center'>
        <Link
        href="/"
        className='hover:text-gray-400'
        >
            <p>Home</p>
        </Link>
        <Link
        href="/projects"
        className='hover:text-gray-400'
        >
            <p>Projects</p>
        </Link>
    </div>
    </div>
  )
}

export default Navbar