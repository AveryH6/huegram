import { useState } from 'react'
import Hue from './Hue'

interface Props{
    addHue: (color:string)=> void
}

const PostHue = (props:Props) => {

    const[color, setColor] = useState('')

  return (
    <div className='flex flex-col w-fit h-fit p-8 justify-evenly gap-8 border-2 border-gray-700 rounded-3xl'>

        <div className='flex flex-col w-full p-4 gap-4' style={{backgroundColor: color}}>
            <input type="text" name="hue" id="hue" defaultValue={"#"} maxLength={7} className='p-2 border-2 border-gray-700 rounded-3xl' onChange={ (event) => setColor(event.target.value) } />
            <a href="#" onClick={ () => props.addHue(color)  } className="btn bg-white border-2 border-gray-700 rounded-2xl text-gray-700 text-center">Post</a>
        </div>

        <Hue hue={ {color, username:"kaylee", likes:3, isLiked:false, id:0}} />

    </div>
  )
}

export default PostHue