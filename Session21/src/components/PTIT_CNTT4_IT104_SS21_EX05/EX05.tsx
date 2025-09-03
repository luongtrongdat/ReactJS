import React from 'react'

export default function EX05() {
  return (
    <div className='relative h-[200px] w-[200px] bg-blue-400 border-22 border-blue-300 rounded-[8px]'>
        <p className='ml-3 pt-5'>Relative parent</p>
      <div className='absolute bottom-[0px] h-[40px] w-[130px] bg-blue-500 text-center rounded-[8px] flex items-center justify-center text-white'>Absolute child</div>
    </div>
  )
}