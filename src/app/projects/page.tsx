"use client"

import Card from '@/ui/Card'
import { useQuery } from '@tanstack/react-query'

type Props = {}

const Projects = (props: Props) => {

    const {data, isLoading, isError, error} = useQuery({
      queryKey: ['projects'],
      queryFn: () => fetch_projects()
    })

    if (isLoading) return <h1>Loading ...</h1>;
    if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className='pt-15 bg-gray-800 h-svh'>
      <div>
        <ul 
        className='m-2 md:m-4 lg:m-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
          {data.map(({title, description, image_url}:{title:string, description:string, image_url:string})=>(
            <li 
            key={title}
            className='w-full'
            >
              <Card title={title} desc={description} image={image_url}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

async function fetch_projects() {
  const res = await fetch("http://localhost:8000/projects");
  /**Conditional that will check if the connection as been succesfull
   * If it fails throw an error. If it success resturn the fetch in a json format
   */
  if (!res.ok) {
    throw new Error("Failed to fetch projects")
  }
  return res.json();
}

export default Projects