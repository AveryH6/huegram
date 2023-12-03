
const Menu = () => {
  return (
    <section className='flex flex-col w-fill h-1/8'>
        
        <div className='flex flex-row justify-between bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400'>
          <div className="flex flex-row">
            <h1 className='flex justify-center w-14 h-14 bg-white text-fuchsia-500 text-center font-body font-bold p-2 m-4 text-4xl rounded-full'>#</h1>

            <h1 className='flex justify-center pt-4 pb-4 text-6xl text-white font-body'>Huegram</h1>
          </div>
          <div className="flex h-8 text-end p-8">
            <form className="flex">
              <input
                placeholder="Search Hues..."
                className="rounded-2xl bg-white p-4"
              />
            </form>
          </div>
        </div>

        <div className="flex w-full bg-[#151515] h-0.5"></div>

        
        
    </section>

  )

}

export default Menu