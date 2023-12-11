import { useState } from 'react'
import Hue from './Hue'
import { FaHashtag } from "react-icons/fa";



interface Props{
    addHue: (color:string)=> void
}

const PostHue = (props:Props) => {

    const[color, setColor] = useState('')

  return (
    <section className='flex flex-col w-[23.5rem] h-fit p-8 justify-evenly items-center gap-8 border-2 border-gray-800 rounded-3xl'>
      <h1 className='text-white text-2xl flex justify-center'>Post New Hue!</h1>
        <div className='flex flex-col pt-[1rem] bg-gray-800 rounded-2xl w-full gap-4' style={{backgroundColor: color}}>
          <div className="relative m-6">
            


            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pb-6 pointer-events-none">
              <svg className="w-6 h-6 mb-[2rem] text-lg text-gray-700" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                <FaHashtag />
              </svg>
            </div>
            <input type="text" name="hue" id="hue" maxLength={6} minLength={6} placeholder='Hexcode' className='pl-[2.5rem] w-[16rem] p-2 text-xl border-3 border-gray-700 hover:border-gray-700 rounded-3xl' onChange={ (event) => setColor(`#` + `${event.target.value}`) } ></input>
            <button onClick={ () => props.addHue(color)  } className="btn w-[16rem] p-1 mt-6 bg-white border-2 border-gray-500 rounded-3xl text-gray-700 text-center">Post</button>
          </div>
            
            
        </div>

        <Hue hue={ {color, username:"kavery", likes:0, isLiked:false, id:0}} />

    </section>
  )
}

export default PostHue