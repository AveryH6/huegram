import Hue from './Hue'
import HueObject from '../HueObject'
import PostHue from './PostHue'

interface Props {
    hues: HueObject[],
    addHue: (color:string) => void,
    toggleLike?: (id?:number) => void
}

const Main = ({hues, addHue, toggleLike} : Props) => {
  return (
    <div className='flex flex-row mt-24 overflow-y-auto'>
        <div className='flex items-center m-14'>
          <PostHue addHue={addHue}/>
        </div>

        <div className='flex flex-row flex-wrap max-w-screen-2xl justify-evenly p-8 gap-8 overflow-y-auto'>
            {hues.map(  (hue) => ( 
                
                <Hue hue={hue} toggleLike={toggleLike}/>
          ))}
        </div>


    </div>
    
  )
}

export default Main