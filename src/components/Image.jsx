export default function Image({
  src = "/templateImage.jpg",
  alt = "template image"
}) {
  return (
    <div className='image-shadow aspect-[1.117] rounded-3xl overflow-clip saturate-0 transition-transform duration-500 ease-out hover:shadow-2xl hover:saturate-100 hover:scale-[1.14] hover:rotate-[-5deg]'
    style={{ transformOrigin: 'bottom left' }} >
      <img className='w-full h-full object-center'
        src={src} alt={alt} />
    </div>
  )
}
