import React from 'react'

export default function Button(
  {
    src,
    alt = "Icon",
    children,
    ...props
  }
) {
  return (
    <button
      className='neomorphism-shadow h-[46px] pl-[26px] pr-5 flex gap-1 items-center justify-center  font-poppins rounded-full whitespace-nowrap bg-[#FFFFFF]/3 duration-300 ease-out hover:bg-white/5 '
      type="button"
      {...props}
    >
      <img className='h-[12.1px]' src={src} alt={alt} />
      {children}
    </button>
  )
}