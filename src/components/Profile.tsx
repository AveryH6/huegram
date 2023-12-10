import HueObject from '../HueObject'
import '../Palette.css'
import { useState } from 'react'

// import kaylee from '/kaylee.jpg'

interface Props {
  hues:HueObject[],
}

const Profile = ({hues}: Props) => {
  const newHues = hues.filter((hue) => hue.username === "kavery");
  const[username] = useState("kavery")
  const[likes] = useState(0);
  const likelikes = newHues.map((hue) => (hue.isLiked ? likes + 1 : likes));
  const likeInc = likelikes.reduce((acc, curr) => acc + curr, 58);
  const[huesPosted] = useState(1);
  const numHues = newHues.map((hue) => (hue.id ? huesPosted + 0 : huesPosted));
  const huesInc = numHues.reduce((cca, rruc) => cca + rruc, 20);


  return (
    
    
    <section className='flex flex-col w-[20rem] mt-16'>
        <span className="flex flex-col h-full border-2 border-gray-800 border-r-black border-b-black border-t-black justify-around items-center text-white">
          <div>
            <h1 className='flex pb-2 text-3xl'>{`@${username}`}</h1>
            <div className="palette border-gray-800">
              
              {newHues.map((hue) => (
                <div style={{backgroundColor: hue.color}}></div>
              ))}
        
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h1 className='flex justify-center text-6xl'>{likeInc}</h1>
              <h2 className='flex justify-center text-2xl'>♥ Likes</h2>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h1 className='flex justify-center text-6xl'>{huesInc}</h1>
              <h2 className='flex text-center text-2xl'># of Hues</h2>
            </div>
          </div>
        </span>

    </section>
  )
}

export default Profile