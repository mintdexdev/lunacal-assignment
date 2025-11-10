export default function IconButton(
  { src,
    alt = "Icon"
    , children, ...props }
) {
  return (
    <button className='group icon-button-shadow aspect-square h-[45px] grid place-items-center rounded-full bg-linear-to-br from-[#303439] to-[#161718] duration-300 ease-out hover:from-[#1E252D] active:from-[#95BCE9]'
      type="button" {...props}>
      <img className="group-active:brightness-200" src={src} alt={alt} />
      {children}
    </button>
  )
}
