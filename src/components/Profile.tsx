import '../Palette.css'

// import kaylee from '/kaylee.jpg'

const Profile = () => {
  return (
    
    <section className='flex flex-col w-1/4'>
        <span className="w-full h-[6.5rem] bg-orange-400">
          <div className="flex h-8 text-end p-8">
            <form className="flex">
              <input
                placeholder="Search Hues..."
                className="rounded-2xl bg-white p-4"
              />
            </form>
          </div>
        </span>
        <span className="flex flex-col h-full border-2 border-gray-700 border-t-black justify-around items-center text-white">
          <div>
            <h1 className='flex pb-2 text-3xl'>@kavery</h1>
            <div className="palette">
              <div style={{backgroundColor: '#facade'}}></div>
              <div style={{backgroundColor: '#beefed'}}></div>
              <div style={{backgroundColor: '#ffa500'}}></div>
              <div style={{backgroundColor: '#ff8c00'}}></div>
              <div style={{backgroundColor: '#ff7f50'}}></div>
              <div style={{backgroundColor: '#ff6347'}}></div>
              <div style={{backgroundColor: '#ff6747'}}></div>
              <div style={{backgroundColor: '#ff6747'}}></div>
              <div style={{backgroundColor: '#123456'}}></div>
              <div style={{backgroundColor: '#654321'}}></div>
              <div style={{backgroundColor: '#246810'}}></div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h1 className='flex justify-center text-6xl'>46</h1>
              <h2 className='flex justify-center text-2xl'>♥ Likes</h2>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h1 className='flex justify-center text-6xl'>42</h1>
              <h2 className='flex text-center text-2xl'># of Hues</h2>
            </div>
          </div>
        </span>

    </section>
  )
}

export default Profile