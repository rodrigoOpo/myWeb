import { OrbitingCircles } from "./OrbitingCircles"

export function Frameworks() {
  
  const skills = [
    "FastAPI.png",
    "nextJs.png",
    "postgresSQL.png",
    "tailwind.svg"
  ]


  return (
    <div className="relative flex h-125 w-full flex-col items-center justify-center overflow-hidden left-50">
      <OrbitingCircles iconSize={40}>
        {skills.map((skills,index)=>(
          <img key={index }src={`/${skills}`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        {skills.map((skills,index)=>(
          <img key={index }src={`/${skills}`} />
        ))}
      </OrbitingCircles>
    </div>
  )

  const Icon = ({src}:{src:string}) => (
    <img src={src} className="duration-200 rounded-sm hover:scale-110" />
  )

}
