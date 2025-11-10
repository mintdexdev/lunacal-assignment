import { useState } from 'react';
import { Divider, Image, Widget } from '@/components';
import Button from '@/components/Button';
import IconButton from '@/components/IconButton';

import leftArrowIcon from '@/assets/icons/left-arrow.svg';
import rightArrowIcon from '@/assets/icons/right-arrow.svg';
import addIcon from '@/assets/icons/add.svg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper/modules';


const dataText = `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.`
const dataText2 = `I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a... I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...`

const CSS_VARIABLE = {
  translateDistance: 0
};

const CONSTANTS = {
  IMAGE_SIZE: 200,
  IMAGE_SIZE_PADDING: 224,
}


export default function App() {

  const [currentTabSelected, setcurrentTabSelected] = useState('About')
  const [Images, setImages] = useState([
    { id: 1, link: '/templateImage.jpg' },
    { id: 2, link: '/templateImage.jpg' },
    { id: 3, link: '/templateImage.jpg' },
    { id: 4, link: '/templateImage.jpg' },
    { id: 5, link: '/templateImage.jpg' },
  ])
  const [scrollImageDistance, setScrollImageDistance] = useState(0)

  const tabs = ['About', 'Experience', 'Recommended']


  if (currentTabSelected === 'About') {
    CSS_VARIABLE.translateDistance = 0;

  } else if (currentTabSelected === 'Experience') {

    CSS_VARIABLE.translateDistance = 1;

  } else if (currentTabSelected === 'Recommended') {
    CSS_VARIABLE.translateDistance = 2;
  }

  return (
    <div className='min-h-screen p-8 flex flex-col-reverse  items-center  text-white bg-linear-to-b from-[-100%] from-[#373E44] to-[#191B1F]
    lg:flex-row lg:px-7 lg:pt-[98px] lg:pb-[108px] lg:gap-7 '>

      <div className='w-full self-stretch   p-4 rounded-[27px] border bg-[#616161]/82 border-[#96BEE7] font-poppins text-sm'>
        Empty Space
      </div>

      <div className='w-full flex flex-col gap-5 h-full lg:w-1/2 lg:min-w-[560px]  '>
        <Widget >
          <div className='h-full w-full pr-[17px] pb-6 flex flex-col min-w-0  '>

            <div className='pl-[21px] pr-[39px] pt-[17px]'>
              <ul className='tab-group-shadow flex p-2 rounded-[23px] relative sscrollbar-custom bg-[#171717] w-full xl:overflow-visible cursor-pointer '>
                <span className={`selected-tab-shadow  h-[calc(100%-16px)] w-[calc(1/3*100%-6px)] min-w-30 rounded-2xl absolute top-2 left-2 z-2 bg-[#28292F] duration-500 ease-out`}
                  style={{ transform: `translate(${CSS_VARIABLE.translateDistance * 100}%)` }}
                />

                {tabs.map(tab => (
                  <li className={`w-1/3 whitespace-nowrap z-3 py-4 rounded-2xl text-center text-lg font-medium leading-[16.1px] duration-100 ease-out  
                  ${tab === currentTabSelected ? 'hover:bg-transparent' : 'tab-hover text-[#A3ADB2] duration-300 relative '}`}
                    key={tab}
                    onClick={() => { setcurrentTabSelected(tab) }}
                  >
                    <span className='relative z-1' >{tab}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='pl-[21px] pr-[35px]  pt-[34px] h-full  max-h-[237px] overflow-y-scroll scrollbar-custom text-xl text-[#969696]'>
              <p> {dataText} </p>
              <p className='mt-4'> {dataText2} </p>
            </div>

          </div>
        </Widget>

        <Divider />

        <Widget >
          <div className='pl-[21px] mr-[57px] mt-5 flex flex-row justify-between'>
            <div className='px-[38px] py-4 font-poppins text-xl rounded-[20px]  leading-[30px] bg-[#171717]'>
              Gallery
            </div>

            <div className='flex gap-[37px] items-center'>
              <Button
                src={addIcon}
                onClick={() => {
                  setImages(prev => [...prev, { id: prev.length + 1, link: '/templateImage.jpg' }])
                }}
              >
                Add Image
              </Button>
              <div className='flex gap-[18px]'>
                <IconButton
                  src={leftArrowIcon}
                  id="prevBtn" />

                <IconButton
                  src={rightArrowIcon}
                  id="nextBtn" />
              </div>
            </div>
          </div>

          <div className='overflow-x-clip pl-[21px] mr-[57px]'>
            <Swiper
              slidesPerView={3}
              spaceBetween={21}
              className="mt-[46px] mb-6"
              style={{ overflow: "visible" }}
              modules={[Navigation]}
              navigation={{
                prevEl: "#prevBtn",
                nextEl: "#nextBtn",
              }}
            >
              {Images.map((item) => (
                <SwiperSlide className='overflow-visible z-1 hover:z-2'
                  key={item.id}>
                  <Image src={item.link} />
                </SwiperSlide>
              ))}

            </Swiper>
          </div>


        </Widget>

        <Divider />

      </div>

    </div>
  )
}
