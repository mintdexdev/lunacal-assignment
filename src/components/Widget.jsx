import { helpIcon, gridIcon } from '@/assets';

export default function Widget({ children }) {
  return (
    <div className=' flex rounded-[18.89px] bg-[#363C43] widget-shadow'>

      <div className='shrink-0 py-3 pl-3 grid place-items-center relative '>

        <div className='absolute top-3 left-4 h-6 w-6'>
          <img src={helpIcon} alt="Help Icon" />
        </div>

        <div className='my-auto'>
          <img src={gridIcon} alt="Help Icon" />
        </div>

      </div>

      <div className='w-full min-w-0 '>
        {children}
      </div>
    </div>
  )
}
