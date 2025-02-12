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
      strings: ["IT Enthusiast.", "Web Developer.", "Programmer."],
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
      <div className='flex flex-col text-center items-center justify-center sm:py-32 my-12 py-16 md:flex-row md:space-x-4 md:text-left md:py-42 gap-8 md:gap-12'>
        <div className='relative'>
          <div className='rounded-full border border-gray-400 bg-white relative z-20'>
            <Image
              className={"rounded-full shadow-xl"}
              priority={true}
              src={"/Nurul-Huda.png"}
              alt=''
              width={300}
              height={300}
            />
          </div>
          <div className='rounded-full absolute -inset-1 blur-md bg-gradient-to-br from-pink-500 via-cyan-500 to-violet-500 z-10'></div>
        </div>
        <div className='md:mt-2 md:w-3/5'>
          <h1 className='text-4xl md:text-8xl mt-2 md:mt-0 font-extrabold bg-clip-text text-transparent drop-shadow-[1.6px_0.8px_rgba(0,0,0,0.8)] bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient'>
            Hi, I{"'"}m Huda!
          </h1>
          <p className='text-2xl mt-4 mb-6 text-left'>
            I{"'"}m a{" "}
            <span
              ref={el}
              className='font-extrabold bg-gradient-to-r from-sky-400 via-yellow-200 to-sky-400 inline-block text-transparent bg-clip-text drop-shadow-[0.6px_0.3px_rgba(0,0,0,0.8)]'
            />
          </p>
          <div className='flex flex-row space-x-4 justify-center md:justify-start'>
            <NextLink
              rel='noopener noreferrer'
              target='_blank'
              // download={true}
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
      {/* <ul className='background bg-slate-100 dark:bg-stone-950'>
        <li className='dark:bg-slate-100 bg-stone-950'></li>
        <li className='dark:bg-slate-100 bg-stone-950'></li>
        <li className='dark:bg-slate-100 bg-stone-950'></li>
        <li className='dark:bg-slate-100 bg-stone-950'></li>
        <li className='dark:bg-slate-100 bg-stone-950'></li>
        <li className='dark:bg-slate-100 bg-stone-950'></li>
        <li className='dark:bg-slate-100 bg-stone-950'></li>
        <li className='dark:bg-slate-100 bg-stone-950'></li>
        <li className='dark:bg-slate-100 bg-stone-950'></li>
        <li className='dark:bg-slate-100 bg-stone-950'></li>
      </ul> */}
    </section>
  );
}

export default HeroSection;
