export default function Image({
  src = "/templateImage.jpg",
  alt = "template image"
}) {
  return (
    <div className='shrink-0 w-50 h-50 bg-gray-600 rounded-3xl overflow-clip saturate-0 transition-transform duration-300 ease-out hover:shadow-2xl hover:shadow-black hover:saturate-100 hover:scale-[1.08] hover:rotate-[-5deg]'
    style={{ transformOrigin: 'bottom left' }} >
      <img className='w-full h-full object-center'
        src={src} alt={alt} />
    </div>
  )
}
