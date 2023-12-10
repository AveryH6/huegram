import { useState } from "react";
import { FaHashtag } from "react-icons/fa";

interface Props {
  searchHues: (color: string) => void;
}


const Menu = ({searchHues} : Props) => {
  const [c, setC] = useState("")

  return (
    <section className='flex flex-col w-fill h-[6rem]'>
        
        <div className='flex flex-row justify-between bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400'>
          <div className="flex flex-row">
            <h1 className='flex justify-center w-14 h-14 bg-white text-fuchsia-500 text-center font-body font-bold p-2 m-4 text-4xl rounded-full'>#</h1>

            <h1 className='flex justify-center pt-4 pb-4 text-6xl text-white font-body'>Huegram</h1>
          </div>

          <form>   
              <label className="mb-2 text-sm font-medium text-white sr-only">Search</label>
              <div className="relative m-4 mr-6">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg className="w-4 h-4 text-xl text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                        <FaHashtag />
                      </svg>
                  </div>
                  <input onChange={(e) => setC(e.target.value)} type="search" id="search" className="block w-[17rem] p-4 ps-10 text-sm text-gray-900 border border-orange-500 rounded-3xl bg-gray-50 focus:ring-orange-500 focus:border-red-500" placeholder="Search Hexcode" required/>
                  <button onClick={() => searchHues(c)} type="submit" className="text-white absolute end-2.5 p-4 bottom-2.5 bg-fuchsia-500 hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-fuchsia-900 font-medium rounded-3xl text-sm px-4 py-2">Search</button>
              </div>
          </form>
          
        </div>

        <div className="flex w-full bg-[#151515] h-0.5"></div>     
        
    </section>

  )

}

export default Menu