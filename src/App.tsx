import Menu from './components/Menu'
import Main from './components/Main'
import Profile from './components/Profile'
import HueObject from './HueObject'
import { useState, useEffect } from 'react'

function App() {

  const [hues, setHues] = useState<HueObject[]>([]);

  useEffect( ()=>
  {
    fetch('./sampleData.json')
    .then( res => res.json() )
    .then( data => setHues(data) ) 
  }, [])

  const [currentUser] = useState({
    username: "kavery",
    likes: 58,
    hues: [ {id:36, color:'#ffa510', username:"kavery", likes: 15}]
  });

  const addNewHue = (color:string ) => 
  {
      console.log(color)
      const newHue = {color, username: currentUser.username, id: length+1 , likes:0, isLiked: false};
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



  return (
    <div className='flex bg-slate-900 h-screen'>
      
      <div className="flex flex-col">
        <Menu/>

        <Main hues={hues} addHue = {addNewHue} toggleLike = {toggleLikeforHue}/>

      </div>
      

      <Profile />
    </div>
  )
}

export default App
