import React from 'react'
import Card from '@/ui/Card'

type Props = {}

const Projects = (props: Props) => {
  return (
    <div className='pt-15 bg-gray-800 h-svh'>
      <div className='grid grid-cols-2 gap-4'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Projects