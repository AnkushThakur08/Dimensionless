import { Link } from "react-router-dom";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import logo from '../../assets/ds-b-2500/ds-b-logo.png'
import darklogo from '../../assets/ds-w-500/ds-logo.png'
import {FiMenu} from 'react-icons/fi'
import {GrClose} from 'react-icons/gr'

import React, { useState } from 'react'

function Header(props) {
  const [open, setOpen] = useState(false)
    const MobileNav = { true: 'translateX(0%)', false: 'translateX(-100%)' }
    var style = {
      transform: MobileNav[open],
  }
  return (
    <nav className="flex relative lg:flex-wrap items-center justify-between p-6 py-10 lg:py-3  lg:px-36 dark:bg-[#202124] dark:text-white">
      <div className="flex 2xl:justify-start  items-center w-10/12 lg:w-6/12">
        <Link to="/" className="w-full lg:w-20  ">
          <div className=" w-full   p-1">
            <img className="lg:w-20 " src={
              props.toggleDark ? darklogo : logo
            } alt="logo" />
          </div>{" "}
        </Link>
        <h1 className=" lg:pr-24 2xl:pr-0 pl-2 montserrat font-semibold tracking-widest  text-xl lg:text-2xl text-brand_gray dark:text-white">
          DIMENSIONLESS
        </h1>
      </div>
      <div className="hidden lg:block w-6/12">
        <ul className="flex items-center justify-end">
          <li>
            <div className="text-[#707070] cursor-pointer text-sm lg:text-xl 2xl:text-4xl mr-4">
              {!props.toggleDark ? (
                <BsMoonFill onClick={() => props.handleModeChange()} />
              ) : (
                  <BsFillSunFill onClick={() => props.handleModeChange()} />
              )}
            </div>
          </li>
          <li>
            <Link to="/explore">
              <p className="px-4 text-[#707070] text-sm lg:text-xl 2xl:text-4xl font-semibold">
                Explore
              </p>
            </Link>
          </li>
          <li>
            <Link to="/community">
              <p className="px-4  text-[#707070] text-sm lg:text-xl 2xl:text-4xl font-semibold">
                Community
              </p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="lg:hidden w-2/12 text-4xl flex justify-end ">
       <div>
         {open?(<GrClose onClick={()=>setOpen(!open)}/>):
         ( <FiMenu onClick={()=>setOpen(!open)}/>)}
       
         </div>
      </div>
      <aside
        style={style}
        className="fixed left-0 right-0 top-0 bottom-0 z-50 min-h-screen w-10/12 bg-gray-800 lg:hidden"
      >
        <div className=" pages border-r pr-3">
        <ul className="block items-center justify-end">
          <li>
            <div className="lg:text-[#707070] text-white pt-24 p-6 cursor-pointer text-2xl lg:text-xl 2xl:text-4xl mr-4">
              {!props.toggleDark ? (
                <BsMoonFill onClick={() => props.handleModeChange()} />
              ) : (
                  <BsFillSunFill onClick={() => props.handleModeChange()} />
              )}
            </div>
          </li>
          <li onClick={()=>setOpen(false)}>
            <Link to="/explore">
              <p className="px-4 lg:text-[#707070] text-white p-6 text-2xl  lg:text-xl 2xl:text-4xl font-semibold">
                Explore
              </p>
            </Link>
          </li>
          <li onClick={()=>setOpen(false)}>
            <Link to="/community">
              <p className="px-4  lg:text-[#707070] text-white  text-2xl lg:text-xl 2xl:text-4xl font-semibold">
                Community
              </p>
            </Link>
          </li>
        </ul>
        </div>
      </aside>
    </nav>
  );
}
export default Header
