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
  <div className="relative group rounded-lg overflow-hidden h-80">
    
    <Link 
    href="/prices">
      <img
        src={fullImageUrl}
        alt="descriptive image of project"
        className="w-full h-full object-cover"
      />
    </Link>

    {/* Overlay */}
    <div className="
      absolute inset-0 
      bg-black/50 
      text-white 
      flex flex-col justify-end p-4
      transition-opacity duration-300

      opacity-100 
      lg:opacity-0 
      lg:group-hover:opacity-100
    ">
      
      <h1 className="font-semibold">{props.title}</h1>
      <h3 className="font-light">{props.desc}</h3>

      <div className="flex gap-3 mt-2">
        <Link href="https://github.com/rodrigoOpo/myWeb">
          <Image src="/github.png" alt="github" width={30} height={30} className='hover:opacity-50'/>
        </Link>

        <Link href="https://www.awwwards.com/websites/nominees/">
          <Image src="/flecha-diagonal.png" alt="demo" width={30} height={30} className='hover:opacity-50'/>
        </Link>
      </div>
    </div>
  </div>
)
}

export default Card