import React from 'react'

const Navigationbar = () => {
  return (
    <div className="flex bg-slate-500 w-full px-10 py-4 bg-opacity-40">
        <h1 className="text-2xl text-blue-950 font-extrabold " >Employee Manager </h1>
        <div className="flex text-x space-x-3 font-medium fixed right-12 text-blue-950 cursor-pointer">
            <a className="hover:font-bold" href="/" >Logout</a>
            <a className="hover:font-bold" href="/" >Home</a>
        </div>    
    </div>
  )
}

export default Navigationbar