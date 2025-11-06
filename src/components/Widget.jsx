import React, { useState } from 'react'
import { MdDragIndicator, MdHelpOutline } from "react-icons/md";

export default function Widget({ children }) {

  return (
    <div className='flex bg-neutral-700 rounded-3xl shadow-lg shadow-neutral-900'>
      <div className='p-3 grid place-items-center relative'>
        <MdHelpOutline className='text-3xl text-neutral-200 absolute top-3' />
        <MdDragIndicator className='my-auto text-3xl text-neutral-400 ' />
      </div>

      <div className='w-full py-3 pr-[54px] min-w-0 '>

        {children}

      </div>
    </div>

  )
}
