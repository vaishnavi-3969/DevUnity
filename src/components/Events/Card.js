import React from 'react'
import { FaLink } from "react-icons/fa";

const Card = ({ type, name  }) => {
  return (
    <section className='mt-10 ml-10'>
        <div className="md:w-[20rem] md:h-[15.5rem] w-[20.5rem] h-[40rem] p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-lg dark:shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row-reverse">
            <div className=" h-full w-full mr-2 rounded-2xl ">
                <p className="m-2 font-bold pl-1 text-lg text-[#5865F2]">{type}</p>
                <h1 className="m-2 text-4xl font-bold dark:text-white">
                    {name}
                </h1>
                <a href="#" className='flex ml-3 mt-10'><FaLink/></a>
            </div>
        </div>
    </section>
  )
}

export default Card