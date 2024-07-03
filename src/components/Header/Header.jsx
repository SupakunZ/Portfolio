import React from 'react'

const Header = ({ children }) => {
  return (
    <>
      <nav className='w-full fixed top-0 py-8 z-50 select-none bg-gradient-to-b from-black shadow-black transition-all duration-300 '>
        <div className="flex justify-between section-container">
          <a href="#home" className='link text-[#FFFFF] text-3xl font-bold'>
            &lt; GUNZ /&gt;
          </a>
          <div className="outer-menu relative flex items-center gap-8 z-[1]">
            <input aria-labelledby='menu' aria-label='menu' className='checkbox-toggle absolute link top-0 right-0 w-6 h-6 opacity-0' type="checkbox" />
            <div className="hamburger w-6 h-6 flex items-center justify-center">
              <div className="relative flex-none w-full bg-white duration-300 flex items-center justify-center" />
            </div>
            {children}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header