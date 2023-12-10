import Menu from './components/Menu'
import Main from './components/Main'
import Profile from './components/Profile'
import HueObject from './HueObject'
import { useState, useEffect } from 'react'

function App() {

  const [hues, setHues] = useState<HueObject[]>([]);
  const [currentUser] = useState({
    username: "kavery",
    likes: 58,
    hues: [ {id:36, color:'#ffa510', username:"kavery", likes: 15}]
  });


  useEffect( ()=>
  {
    fetch('./hues.json')
    .then( res => res.json() )
    .then( data => setHues(data) ) 
  }, [])

  // useEffect( () => 
  // {
  //   fetch('./userInfo.json')
  //   .then(res => res.json())
  //   .then(data => setUser(data))
  // }, [])



  const addNewHue = (color:string ) => 
  {
      console.log(color)
      const newHue = {color, username: currentUser.username, id: hues.length+1 , likes:0, isLiked: false};
      setHues( [newHue, ...hues ] );
  }


  //Like button
  const toggleLikeforHue = (id?:number) => 
  {
    // genterate new array of hues with modified hue
    const newHues = [...hues]
    const hue = newHues.find(h => h.id == id)
    if(hue){
      hue.isLiked = !hue.isLiked
      setHues(newHues)
    }
    

  }

  const searchHues = (colors:string) => {
    const newHues = [...hues];
    const hue = newHues.filter(h => h.color == colors)
    setHues(hue)
  }



  return (
    <span className='flex bg-gradient-to-br from-gray-800 via-gray-950 to-black h-screen fixed'>
      
      <div className="flex flex-col">
        <div className='fixed top-0 z-1 w-full'><Menu searchHues={searchHues}/></div>

        <Main hues={hues} addHue = {addNewHue} toggleLike = {toggleLikeforHue} /> 

      </div>
      

      <Profile hues={hues} />
    </span>
  )
}

export default App
