import HeroText from '@/ui/HeroText'

//some kind of animation like a roket landing on the moon or an astronaut 
// or the star could be could to be added in the future

//V.1 --> A text that present me and an image svg 
 
type Props = {}

const Hero = (props: Props) => {
  return (
    <section
    className='flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space'>
      <HeroText />
    </section>
  )
}

export default Hero