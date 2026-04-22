"use client"

import {useRef} from 'react'
import CopyEmailButton from '@/ui/CopyEmailButton'
import { Frameworks } from '@/ui/Frameworks'
import Block from '@/ui/Block'
import Globe from '@/ui/Globe'

type Props = {}

const About = (props: Props) => {

  const grid2Container = useRef<HTMLDivElement>(null)
  return (
    <section
    className='sm:px-10 useRef px-5 lg:px-15 min-h-screen mt-20 md:mt-30 mb-10 md:mb-20'>
        <h2 className='text-white'>Sobre Mi</h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
            {/*Grid 1*/}
            <div className=' flex items-end grid-default-color grid-1'>
              <img 
              src="/coding.png" alt="coding"
              className='absolute scale-[1.75] -rigth-[5rem] -top-4 md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]' />
              <div className='z-10'>
                <p className='headtext'>Hola, Soy Rodrigo Moreno</p>
                <p className='subtext'>
                  Durante los útimos 2 años, he desarrollado mis habilidades frontend y backend
                  para crear software dinámico y applicaciones web
                </p>
              </div>
              <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-linear-to-t from-indigo' />
            </div>
            {/*Grid 2*/}
            <div className='grid-default-color grid-2'>
              <div ref={grid2Container} className='flex items-center justify-center w-full h-full '>
                <p className='flex items-end text-5xl text-gray-500 '>
                  EL CÓDIGO ES ARTE
                </p>
                <Block containerRef={grid2Container} style={{rotate:"75deg", top:"30%", left:"20%"}} text="Patrones de diseño"/>
                <Block containerRef={grid2Container} style={{rotate:"-30deg", top:"60%", left:"45%"}} text="SOLID"/>
                <Block containerRef={grid2Container} style={{rotate:"90deg", bottom:"30%", left:"70%"}} text="GRASP"/>
                <Block containerRef={grid2Container} style={{rotate:"-45deg", top:"55%", left:"0%"}} text="Principios de diseño"/>
                <Block containerRef={grid2Container} style={{rotate:"20deg", top:"10%", left:"39%"}} text="SPR"/>
              </div>
            </div>
            {/*Grid 3*/}
            <div className='grid-black-color grid-3'>
              <div className='z-10 w-[50%]'>
                <p className='headtext'>Zona Horaria</p>
                <p className='subtext'>Estoy ubicado en Madrid y estoy abierto a trabajar en todo el mundo</p>
              </div>
              <figure
              className='absolute top-[5%] left-[30%]'>
                <Globe />
              </figure>
            </div>
            {/*Grid 4*/}
            <div className='grid-special-color grid-4'>
              <div className='flex flex-col items-center justify-center gap-4 size-full'>
                <p className='text-center headtext'>¿Quieres que trabajemos juntos?</p>
                <CopyEmailButton/>
              </div>
            </div>
            {/*Grid 5*/}
            <div className='grid-default-color grid-5'>
              <div className='z-10 w-[50%]'>
                <p className='headtext'>Stack Tecnológico</p>
                <p className='subtext'>Me especializo en una variedad de lenguajes, freamworks
                  y herramientas que me permiten construir applicaciones robustas y escalables
                </p>
              </div>
              <div className='absolute inset-y-0 md:inset-y-9 w-full h-full start-s-[50%]
              md:scale-125 '>
                <Frameworks/>
              </div>
            </div>
        </div>
    </section>
  )
}

export default About