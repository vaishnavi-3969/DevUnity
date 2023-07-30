import React from 'react'

const SelectedProjects = (props) => {
   
    const {person,setProjects,projects,remove}=props;
    const [selected,setSelected]=React.useState(true);
    selected? console.log("selected") : console.log("add");
    
    
    
    const selector =(p)=>{
        setSelected(prev => !prev)  
    }

    React.useEffect(() => {
        selected ? setProjects((prev)=>[...prev,person.id]) : setProjects(projects.filter(item => item!== person.id))
      }, [selected]);
    
  return (
    <li className="flex justify-between shadow-[0_3px_10px_rgb(0,0,0,0.2)] gap-x-6 py-5 border border-teal-500 border-solid p-4 items-center">
          <div className="flex gap-x-4">
            <div className="min-w-0 flex  items-center px-4">
              <a href={person.html_url} target='_blank' className="text-m font-semibold leading-6 text-gray-900">{person.name}</a>
            </div>
          </div>
          <button onClick={()=>{selector(person)}} className={selected ? "bg-green-500 inline-block rounded  px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] " : "bg-blue-500 inline-block rounded  px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] "} >{selected? "Remove" : "Add"}</button>
        </li>
  )
}

export default SelectedProjects