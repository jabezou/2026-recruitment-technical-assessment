import React from 'react'

const Searchbar = () => {
  return (
    <div className="px-4 flex justify-between py-4">
        <button className="border-2 border-orange-400 flex items-center gap-2 px-5 py-1 rounded-lg">
          <svg className="w-5 fill-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M227.81,66.76l-.08.09L160,139.17v55.49A16,16,0,0,1,152.87,208l-32,21.34A16,16,0,0,1,96,216V139.17L28.27,66.85l-.08-.09A16,16,0,0,1,40,40H216a16,16,0,0,1,11.84,26.76Z"></path></svg>
          <p className="text-orange-400 font-bold">Filters</p>
        </button>
        <div className="flex items-center px-2 border border-gray-300 md:w-1/2 rounded-sm gap-2">
          <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
          <input className="placeholder-gray-500 text-sm w-full py-1" placeholder="Search for a building... " />
        </div>
        <button className="border-2 border-orange-400 flex items-center gap-2 px-5 py-1 rounded-lg">
          <svg className="w-5 fill-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#B7B7B7"><path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z"/></svg>
          <p className="text-orange-400 font-bold">Sort</p>
        </button>
      </div>
  )
}

export default Searchbar