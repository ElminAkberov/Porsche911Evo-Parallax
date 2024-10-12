import Link from 'next/link'
import React, { useRef } from 'react'

const Header = () => {
  const audioRef = useRef(null);
  const handleClick = () => {
    audioRef.current.play()
  }
  return (
    <div className='h-[100vh]'>
      <div className="flex justify-center items-center fixed w-full bg-white z-20">
        <svg xmlns="http://www.w3.org/2000/svg" className='w-[180px] h-[40px] ' viewBox="0 0 4500 300"><title>Porsche</title><path d="M502 221c48.1 0 74-25.9 74-74V74c0-48.1-25.9-74-74-74H0v300h68v-79h434zm6-143v65c0 7.8-4.2 12-12 12H68V66h428c7.8 0 12 4.2 12 12zm228 222c-48.1 0-74-25.9-74-74V74c0-48.1 25.9-74 74-74h417c48.1 0 74 25.9 74 74v152c0 48.1-25.9 74-74 74H736zm411-66c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12H742c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h405zm675-36c39.844 16.757 67.853 56.1 68 102h-68c0-54-25-79-79-79h-361v79h-68V0h502c48.1 0 74 25.9 74 74v50.14c0 46.06-23.75 71.76-68 73.86zm-12-43c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12h-428v89h428zm162-81c0-48.1 25.9-74 74-74h492v56h-486c-7.8 0-12 4.2-12 12v42c0 7.8 4.2 12 12 12h422c48.1 0 74 25.9 74 74v30c0 48.1-25.9 74-74 74h-492v-56h486c7.8 0 12-4.2 12-12v-42c0-7.8-4.2-12-12-12h-422c-48.1 0-74-25.9-74-74V74zm661 0c0-48.1 25.9-74 74-74h480v66h-474c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h474v66h-480c-48.1 0-74-25.9-74-74V74zM3817 0v300h-68V183h-407v117h-68V0h68v117h407V0h68zm156 56v66h527v56h-527v66h527v56h-595V0h595v56h-527z"></path></svg>
        {/* <div className="absolute right-3 text-[12px] ">©Elmin Akberov</div> */}
      </div>
      <div className="relative">
        <div className="font text-center leading-none text-[#E2E2E4] text-[230px]">
          911
          <p className='text-[100px] '>Evolution</p>
        </div>
        <div className="bg-gradient absolute w-full top-0 h-[70vh] opacity-40">
        </div>
      </div>
      <div className="max-w-[1040px] relative flex bottom-20 mx-auto ">
        <img src="/side.avif" alt="" className='' />
      </div>
      <Link href={"#Intro"} onClick={handleClick} className="containers">
        <div className="center group">
          <button className="btn">
            <svg width="180px" height="60px" viewBox="0 0 180 60" className="borders">
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
            </svg>
            <span className='text-[#7D2A2A] group-hover:text-white duration-300'>START EXPERIENCE</span>
          </button>
          <audio ref={audioRef} src="/music/start.mp3"></audio>
        </div>
      </Link>
    </div>
  )
}

export default Header