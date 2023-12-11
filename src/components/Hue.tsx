import HueObject from '../HueObject';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

interface Props {
  hue: HueObject,
  toggleLike?: (id?:number) => void,
}


const Hue = ({hue, toggleLike}: Props) => {

  const r_num = Number("0x" + hue.color.slice(1, 3));
  const g_num = Number("0x" + hue.color.slice(3, 5));
  const b_num = Number("0x" + hue.color.slice(5, 7));

  const hue_intensity = r_num * 0.299 + g_num * 0.587 + b_num * 0.114;

  const text_color = hue_intensity > 186 ? "#000000" : "#FFFFFF";


  return (
    <div
      className="flex flex-col h-64 w-fit aspect-square rounded-3xl justify-between"
      style={{ backgroundColor: hue.color, color: text_color }}
    >

      <div className="flex flex-row justify-between p-3">

        <p className={`text-${text_color} text-2xl opacity-80`}>{hue.color}</p>
        
       
        <button className='text-3xl ' onClick={ () => toggleLike && toggleLike(hue.id) }>{hue.isLiked ? <span className='bg-gradient-to-r from-rose-500 via-red-400 to-red-500 inline-block text-red-500 bg-clip-text'><FaHeart /></span> : <span className={`text-${text_color}`}><FaRegHeart /></span>}</button>
        
        
        

      </div>
        


      <div className={`bg-gray-900 text-white flex w-full text-center justify-between p-4 rounded-b-2xl`}>
        <p className="text-xl">{hue.username}</p>

      </div>
    </div>
  );
};

export default Hue;
