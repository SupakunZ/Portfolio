import React from 'react'
import { useEffect, useRef } from "react";
import { MENULINKS, PROJECTS } from '../../../constants'
import Card from './Card';

const Project = ({ isDesktop, clientHeight }) => {
  const sectionRef = useRef(null);
  const sectionTitleRef = useRef(null);
  return (
    <>
      <section
        ref={sectionRef}
        id={MENULINKS[2].ref}
        className={`${isDesktop && "min-h-screen"
          } w-full relative select-none section-container my-12 lg:my-24 transform-gpu`}
      >
        <div className='w-full absolute top-0 py-20 z-10 bg-gradient-to-b from-black shadow-black transition-all' />
        <img src="../../../public/hero.svg" alt="Hero" width={1572} height={795} className=" absolute top-[0]" />
        <div className="sticky top-10 z-[11]">
          <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
          <div className="flex items-center justify-start relative">
            <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
              Projects
            </span>
            <span className="w-full h-[1.7px] bg-[#1a1443]"></span>
          </div>
        </div>
        <div className="flex flex-col py- justify-center h-full pt-[5.5rem]">
          <div
            className="flex flex-col inner-container transform-gpu z-[11]"
            ref={sectionTitleRef}
          >
            <h1 className="text-4xl font-medium text-gradient w-fit staggered-reveal">
              My Projects
            </h1>
            <p className="uppercase mt-5 tracking-widest text-gray-light-1 staggered-reveal">
              PROJECTS
            </p>
            {/* <h2 className="text-[1.65rem] font-medium md:max-w-lg max-w-sm mt-2 staggered-reveal">
              Some things I&apos;ve built with love, expertise and a pinch of
              magical ingredients.{" "}
            </h2> */}
          </div>
          <div
            className={`${clientHeight > 650 ? "mt-12" : "mt-8"
              } flex project-wrapper no-scrollbar w-fit staggered-reveal`}
          >
            {PROJECTS.map((project, index) => (
              <Card
                classes={
                  index === PROJECTS.length - 1 ? "" : "mr-10 xs:mr-12 sm:mr-16"
                }
                project={project}
                key={project.name}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Project