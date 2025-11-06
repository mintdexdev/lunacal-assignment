
import { MdDragIndicator, MdHelpOutline } from 'react-icons/md'

export default function Widget({ children }) {
  return (
    <div className='w-full grow-0 flex h-1/2 rounded-3xl bg-[#363C43] shadow-lg shadow-neutral-900'>

      <div className='shrink-0 py-3 pl-3 grid place-items-center relative '>
        <MdHelpOutline className='text-3xl text-neutral-200 absolute top-3' />
        <MdDragIndicator className='my-auto text-3xl text-neutral-400 ' />
      </div>

      <div className=' p-3 w-full min-w-0 '>
        {children}
      </div>
    </div>
  )
}
