'use client'
import Image from "next/image"
import { Link } from "react-scroll/modules"
import {HiArrowDown} from "react-icons/hi"

function HeroSection() {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center sm:py-32 my-12 py-16 md:flex-row md:space-x-4 md:text-left md:py-42">
        <div className="md:w-1/2 md:mt-2 px-8">
          <Image className={"rounded-full shadow-xl"} priority={true} src={"/Nurul-Huda.png"} alt="" width={300} height={300} />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">Hi, I{"'"}m Huda!</h1>
          <p className="text-2xl mt-4 mb-6">Im a {" "}
          <span className="font-semibold text-teal-600">
            Web Developer {" "}
          </span>
          based in Jombang, East Java.
          </p>
          <Link
          to="projects"
          className="text-neutral-100 cursor-pointer font-semibold px-6 py-3 bg-teal-600 rounded-md text-2xl"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
        
      <div className="flex flex-row justify-center">
        <Link
        to="about"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        >
          <HiArrowDown size={30} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection