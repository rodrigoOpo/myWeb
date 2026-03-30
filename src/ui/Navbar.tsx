import React from 'react'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='bg-gray-900 text-gray-300 font-extrabold h-15 w-full fixed'>
      <div className='flex flex-row gap-6 m-4 justify-center'>
        <Link
        href="/"
        className=' hover:text-cyan-600'
        >
            <p>Home</p>
        </Link>
        <Link
        href="/projects"
        className=' hover:text-cyan-600'
        >
            <p>Projects</p>
        </Link>
        <Link
        href={"/prices"}
        className=' hover:text-cyan-600'
        >
            <p>Prices</p>
        </Link>
    </div>
    </div>
  )
}

export default Navbar