import React from 'react'
import { MENULINKS } from '../../../../constants'

const Menu = () => {
  return (
    <>
      <div className="menu fixed top-0 left-0 w-full h-full overflow-hidden visible pointer-events-none flex items-center justify-center">
        <div className="flex-none overflow-hidden flex items-center justify-center ">
          <ul className='list-none py-4 px-0 block max-h-screen'>
            {MENULINKS.map((item) => (
              <li key={item.name} className='p-0 m-6 text-2xl block'>
                <a className="link relative inline font-mono font-bold text-5xl duration-300 hover:no-underline" href={`#${item.ref}`}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Menu