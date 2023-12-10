import HueObject from '../HueObject'
import '../Palette.css'
import { useState } from 'react'

// import kaylee from '/kaylee.jpg'

interface Props {
  hues:HueObject[],
}

const Profile = ({hues}: Props) => {
  const newHues = hues.filter((hue) => hue.username === "kavery");
  const[likes] = useState(0);
  const likelikes = newHues.map((hue) => (hue.isLiked ? likes + 1 : likes));
  const lily = likelikes.reduce((acc, curr) => acc + curr, 0);

  return (
    
    
    <section className='flex flex-col w-[35rem] mt-16'>
        <span className="flex flex-col h-full border-2 border-gray-800 border-r-black border-b-black border-t-black justify-around items-center text-white">
          <div>
            <h1 className='flex pb-2 text-3xl'>@kavery</h1>
            <div className="palette border-gray-800">
              
              
              
              
              
              
              
              
              
              {/* <div style={{backgroundColor: '#facade'}}></div>
              <div style={{backgroundColor: '#beefed'}}></div>
              <div style={{backgroundColor: '#ffa500'}}></div>
              <div style={{backgroundColor: '#ff8c00'}}></div>
              <div style={{backgroundColor: '#ff7f50'}}></div>
              <div style={{backgroundColor: '#ff6347'}}></div>
              <div style={{backgroundColor: '#ff6747'}}></div>
              <div style={{backgroundColor: '#ff6747'}}></div> */}
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h1 className='flex justify-center text-6xl'>{lily}</h1>
              <h2 className='flex justify-center text-2xl'>♥ Likes</h2>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h1 className='flex justify-center text-6xl'>{lily}</h1>
              <h2 className='flex text-center text-2xl'># of Hues</h2>
            </div>
          </div>
        </span>

    </section>
  )
}

export default Profile