import React, { useEffect } from 'react'
import { MENULINKS, TYPED_STRINGS } from '../../../constants'
import styles from "./Hero.module.scss";
import Profiles from '../Profiles/Profiles';
import Button from '../Button/Button';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <>
      <section id={MENULINKS[0].ref} className='w-full flex md:items-center py-8 2xl:container mx-auto md:px-12 px-4 min-h-screen relative mb-24' style={{ opacity: "1" }}>
        <div className="flex flex-col pt-40 md:pt-0 select-none">
          <h5 className={`${styles.intro} font-mono font-medium text-indigo-light staggered-reveal`}>
            Hi, my name is
          </h5>
          <h1 className={`${styles.heroName} text-white text-6xl font-semibold`}>
            <span className={`relative ${styles.emphasize} staggered-reveal`}>
              Supakun
            </span>
            <span className="staggered-reveal"> Thata </span>
          </h1>
          <p className="staggered-reveal pt-6 text-3xl text-gray-light-3 font-mono leading-relaxed">
            <Typewriter options={{ strings: TYPED_STRINGS, autoStart: true, loop: true }} />
          </p>
          <div className="staggered-reveal">
            <Profiles />
          </div>
          <div className="staggered-reveal flex gap-8 pt-4">
            <Button href={`#${MENULINKS[4].ref}`} classes="link" type="primary">
              CONTACT ME
            </Button>
            <Button href={`#${MENULINKS[4].ref}`} classes="link" type="secondary">
              GET RESUME
            </Button>
          </div>
        </div>
        <div className="absolute invisible w-4/12 lg:visible lg:right-12 2xl:right-16">
          <div className={`${styles.blob}`}></div>
        </div>
      </section>
    </>
  )
}

export default Hero