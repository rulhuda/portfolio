"use client";
import Image from "next/image";
import Typed from "typed.js";
import NextLink from "next/link";
import { Link } from "react-scroll/modules";
import { HiArrowDown, HiDownload } from "react-icons/hi";
import { useEffect, useRef } from "react";

function HeroSection() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web Developer.",
        "Graphic Designer.",
        "IT Support.",
        "Programmer.",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 150,
      loop: true,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <section id='home'>
      <div className='flex flex-col text-center items-center justify-center sm:py-32 my-12 py-16 md:flex-row md:space-x-4 md:text-left md:py-42'>
        <div className='md:w-1/2 md:mt-2 px-8'>
          <Image
            className={"rounded-full shadow-xl"}
            priority={true}
            src={"/Nurul-Huda.png"}
            alt=''
            width={300}
            height={300}
          />
        </div>
        <div className='md:mt-2 md:w-3/5'>
          <h1 className='font-bold text-4xl mt-6 md:text-7xl md:mt-0 text-left'>
            Hi, I{"'"}m Huda!
          </h1>
          <p className='text-2xl mt-4 mb-6 text-left'>
            I{"'"}m a <span ref={el} className='font-semibold text-teal-500' />
          </p>
          <div className='flex flex-row space-x-4 justify-center md:justify-start'>
            <NextLink
              rel='noopener noreferrer'
              target='_blank'
              download={true}
              title='Download Portfolio'
              href='/resume/Nurul-Huda_Portfolio.pdf'
              className='text-neutral-100 cursor-pointer font-semibold px-6 py-3 bg-teal-500 rounded-md text-2xl'
            >
              <div className='flex flex-row'>
                <HiDownload size={28} /> Portfolio
              </div>
            </NextLink>
            <Link
              to='contact'
              className='text-neutral-100 cursor-pointer font-semibold px-6 py-3 bg-indigo-500 rounded-md text-2xl'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className='flex flex-row justify-center'>
        <Link
          className='cursor-pointer'
          to='about'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={30} className='animate-bounce' />
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
