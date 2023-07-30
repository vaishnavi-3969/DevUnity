import axios from 'axios';
import React from 'react'
import Project from '../Project/Project';

const Projects = () => {
    const [repos,setRepos]=React.useState([]);
    const [projects,setProjects]=React.useState([]);
    const[selectedRepos,setSelectedRepos]=React.useState([]);
    const[selectionProcess,setSelectionProcess]=React.useState(false)
    React.useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await axios.get("https://api.github.com/users/vardhan0604/repos");
            const data = response.data;
            setRepos(data);
          } catch (error) {
            console.error('Error fetching repos', error);
          }
        };
        fetchUserData()
    },[])
     
    React.useEffect(()=>{
        setSelectedRepos(repos.filter(item => projects.includes(item.id)));
    },[projects,repos])

    
    const showcase=selectedRepos.map((e)=>(
      <Project person={e} setProjects={setProjects} projects={projects} remove={true}/>
    ))

    const onclick =()=>{
      setSelectionProcess(prev=>!prev)
    }  
    const selectRepos=repos.map((person) => (
        // <li className="flex justify-between gap-x-6 py-5 border border-teal-500 border-solid p-4 items-center">
        //   <div className="flex gap-x-4">
        //     <div className="min-w-0 flex  items-center px-4">
        //       <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
        //     </div>
        //   </div>
        //   <button onClick={selector} class="inline-block rounded bg-primary px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Add </button>
        // </li>
        <Project person={person} setProjects={setProjects} projects={projects} remove={false}/>
      ))
    
  return (
    <div>
        <h1 className="text-4xl text-center font-bold md:text-4xl md:font-semibold ">Showcase your best projects</h1>
        {selectionProcess? <div> 
          <h2 className=" mt-4 text-lg text-center font-bold md:text-4xl md:font-semibold">Your projects</h2> 
          <ul className="grid grid-cols-3 gap-4 px-6 mt-4">
            {showcase}
            </ul> </div>: <div className='px-6'>
            <h2 className=" mt-4 text-lg text-center font-bold md:text-4xl md:font-semibold">Add your projects</h2> 
            <ul className="grid grid-cols-3 gap-4 px-6 mt-4">
            {selectRepos}
            </ul>
            <button onClick={onclick} class="inline-block rounded bg-primary px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Done </button>

        </div>}
        

        
{/* 
        {showcase} */}
    </div>
  )
}

export default Projects