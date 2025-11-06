import { useState } from 'react';

import { Divider, Image, Widget } from '@/components';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';

const text = `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now. I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a... Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quas asperiores illo esse hic repudiandae rem, error ipsum explicabo sunt repellendus eos illum sapiente temporibus alias facere voluptates aut, magni similique non praesentium aliquid tempore cupiditate. Ducimus recusandae odit, excepturi ullam aut error iure! Architecto dignissimos voluptatem esse nihil consequatur quibusdam voluptatibus enim ratione ab hic! Quam provident impedit odit ipsa, culpa velit voluptate tempora neque necessitatibus similique, corrupti reiciendis officia nobis quaerat! Quos possimus error obcaecati exercitationem nulla quia iste doloremque adipisci ipsa dolorum quo vel consequuntur dolorem repellat nobis inventore facere sed aliquam ad, praesentium maiores ex quam voluptate? Nostrum deserunt neque repudiandae, blanditiis recusandae cupiditate veritatis error molestias ea! Inventore autem, iure nulla earum error aliquid assumenda, voluptatum cum repellat consequatur dolor quam esse et nemo nam facere obcaecati, recusandae officiis. Temporibus provident sapiente inventore ad ab? Aperiam ratione suscipit numquam rerum ullam! Eos, sint quia dolorem quam, dolorum laudantium quisquam, hic repellat aliquam ex voluptate ipsam maiores! Fugit ea ad, perferendis eius sequi incidunt aspernatur rerum rem accusantium itaque! Quis odio dicta illum a atque beatae minima magni odit optio iusto error officiis aliquam dignissimos deserunt est voluptas, commodi, non nesciunt. Provident ab esse consectetur soluta?`

const CSS_VARIABLE = {
  translateDistance: ''
};

const CONSTANTS = {
  IMAGE_SIZE: 200,
  IMAGE_SIZE_PADDING: 216,
}


export default function App() {

  const [currentTabSelected, setcurrentTabSelected] = useState('About')
  const [Images, setImages] = useState([{ id: 1, link: '/templateImage' }])
  const [scrollImageDistance, setScrollImageDistance] = useState(0)

  const tabs = ['About', 'Experience', 'Recommended']


  if (currentTabSelected === 'About') {
    CSS_VARIABLE.translateDistance = 'translate-0';

  } else if (currentTabSelected === 'Experience') {

    CSS_VARIABLE.translateDistance = 'translate-x-[100%]';

  } else if (currentTabSelected === 'Recommended') {
    CSS_VARIABLE.translateDistance = 'translate-x-[200%]';
  }

  return (
    <div className='flex gap-5 p-5 h-screen text-white bg-linear-to-b from-[#282C31] to-[#191B1F] lg:p-10 lg:gap-10'>

      <div className='w-1/2 bg-[#363C43] rounded-3xl p-4'>
        Empty Space
      </div>

      <div className='w-1/2 flex flex-col gap-5 h-full'>

        <Widget>
          <div className='h-full flex flex-col '>

            <div className='overflow-x-scroll overflow-y-clip lg:overflow-visible mr-[42px]  bg-[#171717] flex justify-around p-2 rounded-3xl relative lg:w-full  '>

              <div className={`duration-500 ease-out h-[60px] min-w-40  w-[calc(1/3*100%-6px)] bg-[#28292F]  rounded-2xl absolute top-2 left-2 z-2 shadow-[0_16px_48px_16px_rgba(0,0,0,1)]  
                ${CSS_VARIABLE.translateDistance} `} />

              {tabs.map(tab => (
                <button className={`whitespace-nowrap z-3 lg:text-xl py-4 min-w-40 w-full rounded-2xl text-center duration-100 ease-out 
                  ${tab === currentTabSelected ? 'hover:bg-transparent' : 'duration-300 hover:bg-neutral-50/5  '}`}
                  type='button'
                  key={tab}
                  onClick={() => { setcurrentTabSelected(tab) }}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className='h-full py-4 overflow-y-scroll scrollbar-custom pr-[42px]'>
              <p className='text-xl text-[#969696]'>
                {text}
              </p>
            </div>

          </div>
        </Widget>

        <Divider />

        <Widget>
          <div className='flex flex-col gap-4  lg:flex-row lg:justify-between lg:gap-0'>
            <div className=' bg-[#171717] px-8  z-3 text-xl py-4 w-fit rounded-2xl text-center duration-300'
            >
              Gallery
            </div>

            <div className='flex  min-w-0 items-center gap-2 lg:gap-6'>
              <button className='whitespace-nowrap text-xl px-6 py-3 rounded-full shadow-[4px_4px_8px_#00000080,-4px_-4px_8px_#ffffff80] hover:bg-white/5 duration-300 ease-out'
                onClick={() => { setImages(prev => [...prev, { id: prev.length + 1, link: '/templateImage' }]) }}
              >
                + Add Image
              </button>

              <button className='aspect-square h-12 bg-neutral-800 text-xl rounded-full shadow-[4px_4px_8px_#00000080,-4px_-4px_8px_#ffffff80] grid place-items-center hover:bg-white/5 duration-300 ease-out'
                onClick={() => {
                  setScrollImageDistance(prev => {
                    if (prev < 0)
                      return prev += CONSTANTS.IMAGE_SIZE

                    return prev
                  })
                }}
              >
                <FaArrowLeft />
              </button>

              <button className='aspect-square h-12 bg-neutral-800  text-xl rounded-full shadow-[4px_4px_8px_#00000080,-4px_-4px_8px_#ffffff80] grid place-items-center hover:bg-white/5 duration-300 ease-out'

                onClick={() => {
                  setScrollImageDistance(prev => {
                    if (-(Images.length - 1) * CONSTANTS.IMAGE_SIZE_PADDING < scrollImageDistance)
                      return prev -= CONSTANTS.IMAGE_SIZE

                    return prev
                  })
                }}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div className='overflow-x-scroll p-4 rounded-2xl z-1 scrollbar-hide'>
            <div className='flex gap-4 py-4 lg:py-8 w-fit '
              style={{ transform: `translateX(${scrollImageDistance}px)` }}
            >
              {Images.map((item) => (
                <Image key={item.id} />
              ))}
            </div>
          </div>

        </Widget>

        <Divider />

      </div>

    </div>
  )
}
