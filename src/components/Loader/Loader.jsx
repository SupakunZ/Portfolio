import React, { useEffect, useState } from 'react'
import style from './Loader.module.scss'

const Loader = () => {

  var [number, setNumber] = useState(0)

  const counTer = () => {
    const count = setInterval(() => {
      setNumber(number++)
      if (number >= 100) {
        return clearInterval(count);
      }
    }, 40)
  }

  useEffect(() => {
    counTer();
  }, [])

  return (
    <>
      <section>
        <div className={`${style.preloader} ${number >= 100 ? `${style.active} ` : null}`}>
          <div className={`${style.counter} ${number >= 100 ? `${style.hide}` : null} `}>{number}</div>
        </div>
      </section >
    </>
  )
}

export default Loader