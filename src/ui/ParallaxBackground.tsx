"use client"

import { motion, useScroll, useSpring, useTransform } from "motion/react"

type Props = {}

const ParallaxBackground = (props: Props) => {

  const { scrollYProgress } = useScroll()
  const x = useSpring(scrollYProgress, {damping:50})
  const mountain3Y = useTransform(x, [0,0.5], ["0%", "70%"])
  const planetX = useTransform(x, [0,0.5], ["0%", "-40%"])
  const mountain2Y = useTransform(x, [0,0.5], ["0%", "40%"])
  const mountain1Y = useTransform(x, [0,0.5], ["0%", "10%"])

  return (
    <section className='absolute inset-0 bg-black/50'>
        <div className='relative h-screen overflow-y-hidden'>
            {/*Backgound Sky */}
            <div
            className='absolute inset-0 w-full h-screen -z-50'
            style={{
              backgroundImage: "url(/space3.jpg)",
              backgroundPosition: "bottom",
              backgroundSize: "cover"
              }} />
            {/*Mountain Layer 3 */}
            <motion.div 
            className='absolute inset-0 -z-40'
            style={{
              backgroundImage: "url(/mountain1.png)",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
              y: mountain3Y
              }}/>
            {/*Planets */}
            <motion.div 
            className="absolute inset-0 -z-30 size-50 md:ml-40 lg:ml-120 lg:mt-40"
            style={{
              backgroundImage: "url(/tierra.png)",
              backgroundPosition: "bottom",
              backgroundSize: "contain",
              x: planetX
              }}/>
            {/*Mountain Layer 2 */}
            <motion.div 
            className="absolute inset-0 -z-20"
            style={{
              backgroundImage: "url(/mountain.png)",
              backgroundPosition: "bottom",
              backgroundRepeat:"no-repeat",
              backgroundSize: "cover",
              y: mountain2Y
              }}
            />
            {/*Mountain Layer 1 */}
            <motion.div 
            className="absolute inset-0 -z-20"
            style={{
              backgroundImage: "url(/floor.png)",
              backgroundPosition: "bottom",
              backgroundRepeat:"no-repeat",
              backgroundSize: "cover",
              y: mountain1Y
              }}
            />
        </div>
    </section>
  )
}

export default ParallaxBackground