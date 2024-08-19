import React, { useEffect, useState } from 'react'
import style from './Loader.module.scss'

const Loader = ({ time }) => {

  var [number, setNumber] = useState(0)

  const counTer = async () => {
    const count = setInterval(() => {
      setNumber(number += 1)
      if (number > 100) {
        time(false)
        return clearInterval(count);
      }
    }, 60)
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