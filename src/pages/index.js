import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  let sections = ["Intro", "1965s", "1974s", "1988s", "1997s", "2004s", "2011s", '2018s']
  const audioRef = useRef(null);
  const [activeSection, setActiveSection] = useState("");
  const [isActive, setIsActive] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 600) {
        setIsActive(false)
      } else {
        setIsActive(true)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })
  
  const playAudio = (src) => {
    if (audioRef.current) {
      audioRef.current.src = src;
      audioRef.current.play();
    }
  }
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 })
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      observer.observe(section);
    });
  }, [sections])
  useEffect(() => {
    playAudio(`/music/${activeSection}.mp3`);
  }, [activeSection]);
  return (
    <React.Fragment>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <div className={`fixed top-[30%] bg-transparent fonts  z-20 duration-300 ${isActive ? `opacity-100` : `opacity-0`}`}>
        <div>
          {sections.map(music => (
            <>
              <Link className={`${activeSection == "Intro" && "text-white"}`} href={`#${music}`} onClick={() => playAudio(`/music/${activeSection}.mp3`)} ><p className={`${activeSection == music ? `font-bold border-b-4 duration-300 border-black ${activeSection == "Intro" && "border-white"}` : ""} my-4 px-3`}>{music}</p></Link>
            </>
          ))}
        </div>
      </div>
      <div className="overflow-hidden">
        <article id="Intro" className="bg h-[100vh]">
          <div className="text-center pt-10">
            <h3 className="font ">Ferdinand Porsche</h3>
            <div className="h-1 w-5 mb-2 bg-white mx-auto"></div>
            <p className="text-lg fonts w-1/2 mx-auto">The History of Porsche goes back to 1875 - the birth year of Ferdinand Porsche.It is he laid the foundations for a unique company with strong locals. </p>
          </div>
          <audio ref={audioRef} autoPlay loop></audio>
        </article>
        <article id="1965s" className="bg-1 text-black shadow-none h-[100vh]">
          <div className="text-center  pt-10">
            <h3 className="satoshi">1965s</h3>
            <div className="h-1 w-5 mb-2 bg-black mx-auto"></div>
            <p className="text-lg fonts w-1/2 mx-auto">The first generation of the iconic 911 featured a 2.0L flat-six engine. With its rear-engine layout and round headlights, it set the standard for future sports cars. </p>
          </div>
          <audio ref={audioRef} autoPlay loop></audio>
        </article>
        <article id="1974s" className="bg-2 shadow-none text-black h-[100vh]">
          <div className="text-center  pt-10">
            <h3 className="satoshi">1974s</h3>
            <div className="h-1 w-5 mb-2 bg-black mx-auto"></div>
            <p className="text-lg fonts w-1/2 mx-auto">The G-series introduced new bumper designs due to safety regulations. The engine capacity was increased to 2.7L, and the groundwork for the Turbo model was laid. </p>
          </div>
          <audio ref={audioRef} autoPlay loop></audio>
        </article>
        <article id="1988s" className="bg-3 h-[100vh] shadow-none text-black">
          <div className="text-center  pt-10">
            <h3 className="satoshi">1988s</h3>
            <div className="h-1 w-5 mb-2 bg-black mx-auto"></div>
            <p className="text-lg fonts w-1/2 mx-auto">The Carrera 3.2 featured an improved engine management system and a 5-speed G50 gearbox, offering better reliability while preserving the classic 911 feel. </p>
          </div>
          <audio ref={audioRef} autoPlay loop></audio>
        </article>
        <article id="1997s" className="bg-4 h-[100vh] shadow-none text-black">
          <div className="text-center  pt-10">
            <h3 className="satoshi">1997s</h3>
            <div className="h-1 w-5 mb-2 bg-black mx-auto"></div>
            <p className="text-lg fonts w-1/2 mx-auto">The last air-cooled 911. The 993 series came with aerodynamic improvements and a more modern design. It was also the first to feature twin-turbo technology. </p>
          </div>
          <audio ref={audioRef} autoPlay loop></audio>
        </article>
        <article id="2004s" className="bg-5 h-[100vh] shadow-none text-black">
          <div className="text-center  pt-10">
            <h3 className="satoshi">2004s</h3>
            <div className="h-1 w-5 mb-2 bg-black mx-auto"></div>
            <p className="text-lg fonts w-1/2 mx-auto">Building on the water-cooled engine technology of the 996, the 997 brought back retro styling elements while modernizing the 911`&apos;`s spirit. It came in both coupe and cabrio versions. </p>
          </div>
          <audio ref={audioRef} autoPlay loop></audio>
        </article>
        <article id="2011s" className="bg-6 h-[100vh] shadow-none text-black">
          <div className="text-center  pt-10">
            <h3 className="satoshi">2011s</h3>
            <div className="h-1 w-5 mb-2 bg-black mx-auto"></div>
            <p className="text-lg fonts w-1/2 mx-auto">The 991 series featured a wider body, longer wheelbase, and a lighter chassis. The 3.8L engine brought improved performance and balance. </p>
          </div>
          <audio ref={audioRef} autoPlay loop></audio>
        </article>
        <article id="2018s" className="bg-[#F7F7F7] max-w-[1440px] shadow-none text-black scale-110  relative  justify-center items-center h-[100vh] mx-auto">
          <div className="text-center  pt-10">
            <h3 className="satoshi">2018s</h3>
            <div className="h-1 w-5 mb-2 bg-black mx-auto"></div>
            <p className="text-lg fonts w-1/2 mx-auto">Packed with modern technology, the 992 features a digital dashboard and enhanced aerodynamics. It merges the legendary 911 performance with contemporary innovations. </p>
          </div>
          <img src="/porsche.avif" alt="" />
          <audio ref={audioRef} autoPlay loop></audio>
        </article>
      </div>
    </React.Fragment>
  );

}
