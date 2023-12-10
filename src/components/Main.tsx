import Hue from './Hue'
import HueObject from '../HueObject'
import PostHue from './PostHue'
// import Menu from './Menu'

interface Props {
    hues: HueObject[],
    addHue: (color:string) => void,
    toggleLike?: (id?:number) => void,
    // searchHues: (color:string) => void
}
const Main = ({hues, addHue, toggleLike} : Props) => { //searchHues
  return (
    <div className='flex flex-row w-[70rem] mt-24 overflow-y-auto'>
          {/* <Menu searchHues={searchHues}/> */}
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