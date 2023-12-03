
// import kaylee from '/kaylee.jpg'

const Profile = () => {
  return (
    <section className='flex flex-col w-1/4 border-2 border-white p-8 justify-around items-center text-white'>

        <div>
          <h1 className='flex pb-2 text-3xl'>@kavery</h1>
          <div className="grid grid-cols-4 w-fit h-1/8 place-items-center border-black border-2">
            <div className="h-10 w-10 bg-[#ffa500] border-2 border-[white]"></div>
            <div className="h-10 w-10 bg-[#ff8c00] border-2 border-white"></div>
            <div className="h-10 w-10 bg-[#ff7f50] border-2 border-white"></div>
            <div className="h-10 w-10 bg-[#ff6347] border-2 border-white"></div>
            <div className="h-10 w-10 bg-[#443850] border-2 border-white"></div>
            <div className="h-10 w-10 bg-[#0B3C49] border-2 border-white"></div>
            <div className="h-10 w-10 bg-[#914D76] border-2 border-white"></div>
            <div className="h-10 w-10 bg-[#CEF7A0] border-2 border-white"></div>
            <div className="h-10 w-10 bg-[#6CA6C1] border-2 border-white"></div>
            <div className="h-10 w-10 bg-[#ACD8AA] border-2 border-white"></div>
            <div className="h-10 w-10 bg-[#F48498] border-2 border-white"></div>
            <div className="h-10 w-10 bg-[#E78F8E] border-2 border-white"></div>
            <div className="h-10 w-10 bg-[#41393E] border-2 border-white"></div>
            <div className="h-10 w-10 bg-[#BF9ACA] border-2 border-white"></div>
            <div className="h-10 w-10 bg-[#F7A072] border-2 border-white"></div>
            <div className="h-10 w-10 bg-[#B5E2FA] border-2 border-white"></div>
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


    </section>
  )
}

export default Profile