"use client"
import { motion } from 'motion/react'

type Props = {
  text: string,
  style: object,
  containerRef: object
}

const Block = (props: Props) => {
  return (
    <motion.div 
    className='absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm
    w-48 cursor-grab'
    style={props.style}
    whileHover={{scale:1.05}}
    drag
    dragConstraints={props.containerRef}
    dragElastic={1}>
      {props.text}
    </motion.div>
  )
}
 
export default Block