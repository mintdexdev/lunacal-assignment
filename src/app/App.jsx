
import Image from '@/components/Image';
import Widget from '@/components/Widget';
import { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

export default function Home() {

  const [currentTabSelected, setcurrentTabSelected] = useState("about")

  let translateDistance = "";

  if (currentTabSelected === "about") {
    translateDistance = "translate-0";

  } else if (currentTabSelected === "exp") {

    translateDistance = "translate-x-[100%]";

  } else if (currentTabSelected === "recom") {
    translateDistance = "translate-x-[200%]";

  }


  return (<div className='flex gap-10 p-10 h-screen text-white bg-linear-to-b from-[#282C31] to-[#191B1F]'>

    <div className='w-1/2 bg-neutral-700 rounded-3xl p-4'>
      Empty Space
    </div>

    <div className='w-1/2 '>
      <Widget>
        <div className='bg-[#171717] flex justify-around p-2 rounded-3xl relative'>

          <div className={`duration-300 h-[60px] w-[calc(1/3*100%-6px)] bg-gray-700 rounded-2xl absolute top-2 left-2 z-2 shadow-[0_16px_48px_16px_rgba(0,0,0,1)]  ${translateDistance} `} />

          <button className="z-3 text-xl py-4 w-full rounded-2xl text-center hover:bg-neutral-50/5 duration-300"
            type='button'
            onClick={() => { setcurrentTabSelected("about") }}
          >
            About me
          </button>

          <button className="z-3 text-xl py-4 w-full rounded-2xl text-center hover:bg-neutral-50/5 duration-300"
            type='button'
            onClick={() => { setcurrentTabSelected("exp") }}
          >
            Experiences
          </button>

          <button className="z-3 text-xl py-4 w-full rounded-2xl text-center hover:bg-neutral-50/5 duration-300"
            type='button'
            onClick={() => { setcurrentTabSelected("recom") }}
          >
            Recommended
          </button>
        </div>

        <div className='py-4 text-xl '>
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
          I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
        </div>
      </Widget>
      <div className='mx-4 h-1 my-4   bg-neutral-500 rounded-full shadow-sm shadow-black' />

      <Widget>

        <div className='flex justify-between '>
          <div className=" bg-[#171717] px-8  z-3 text-xl py-4 w-fit rounded-2xl text-center duration-300"
          >
            Gallery
          </div>

          <div className="flex gap-6 min-w-0 items-center">
            <button className="whitespace-nowrap text-xl px-6 py-3 rounded-full shadow-[4px_4px_8px_#00000080,-4px_-4px_8px_#ffffff80]">
              + Add Image
            </button>

            <button className="aspect-square h-12 bg-neutral-800 text-xl rounded-full shadow-[4px_4px_8px_#00000080,-4px_-4px_8px_#ffffff80] grid place-items-center">
              <FaArrowLeft />
            </button>

            <button className="aspect-square h-12 bg-neutral-800  text-xl rounded-full shadow-[4px_4px_8px_#00000080,-4px_-4px_8px_#ffffff80] grid place-items-center">
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="overflow-clip p-4 rounded-2xl">
          <div className="flex gap-4 py-8 w-fit">
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
          </div>
        </div>

      </Widget>
      <div className='mx-4 h-1 my-4   bg-neutral-500 rounded-full shadow-sm shadow-black' />



    </div>

  </div>
  )
}
