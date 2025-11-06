import { MdDragIndicator, MdHelpOutline } from "react-icons/md";
 
export default function Widget({ children }) {

  return (
    <div className='w-full flex bg-[#363C43] rounded-3xl shadow-lg shadow-neutral-900 h-[calc(50%-20px)]'>
      <div className='p-3 grid place-items-center relative '>
        <MdHelpOutline className='text-3xl text-neutral-200 absolute top-3' />
        <MdDragIndicator className='my-auto text-3xl text-neutral-400 ' />
      </div>

      <div className='w-full min-w-0 '>

        {children}

      </div>
    </div>
  )
}
