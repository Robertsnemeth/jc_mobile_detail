import { useState } from 'react'

const hamburgerbutton = ( { isOpen, setIsOpen }) => {

    const genericHamburgerLine = `h-1 w-6 md:h-2 md:w-10 my-1 rounded-full bg-white transition ease transform duration-300`;

    return (
      <button
        className="flex flex-col h-12 w-12 md:h-20 md:w-20 border-2 border-black rounded justify-center items-center group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-3 md:translate-y-4 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-3 md:-translate-y-4 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>
    )
}

export default hamburgerbutton