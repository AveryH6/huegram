import Hue from './Hue'
import HueObject from '../HueObject'
import PostHue from './PostHue'

interface Props {
    hues: HueObject[],
    addHue: (color:string) => void
}

const Main = (props : Props) => {
  return (
    <div className='flex flex-row overflow-y-auto'>
        <div className='mt-[8rem] ml-16'>
          <PostHue addHue={props.addHue}/>
        </div>

        <div className='flex flex-row flex-wrap max-w-screen-2xl justify-evenly p-8 gap-8 overflow-y-auto'>
            {props.hues.map(  (hue) => ( 
                
                <Hue hue={hue}/>
          ))}
        </div>

    </div>
    
  )
}

export default Main