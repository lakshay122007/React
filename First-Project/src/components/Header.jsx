import React from 'react'

export default function Header() {
  return (
    <div className='bg-white text-black p-4 flex justify-between items-center gap-5'>
        <div className='p-1 m-2 hover:border-x-2 hover:rounded-xl hover:bg-cyan-300 hover:shadow-lg hover:shadow-gray-700'>Home</div>
        <div>About</div>
        <div>Contact Us</div>
    </div>
  )
}
