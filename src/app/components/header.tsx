'use client'

import SiteNav from './site-nav'
import {LamboLogo} from "./lambologo"

//use logo maker to make them a quick logo to use with the mobile menu

function Header() {
  return (
    <div className="header">
      <div className="logo-container w-1/12 my-3 mx-auto hidden sm:block">
        <LamboLogo height="100%" width="100%" />
      </div>
      {/* 
      <div className="text-center bg-red-500">
        <h1 className="text-4xl">
          Jones & Erwin, P.C. 
        </h1>
        <h3 className="text-3xl">
          Attorney's at Law
        </h3>
      </div>
      
      <div className="text-center">
        <p>
          109 N Wall Street
        </p>
        <p>
          Calhoun, Georgia 30701  
        </p>
        <p>
          706-625-2233
        </p>
      </div>
      <div className="text-center">
        <p>
          Serving Gordon County, Bartow County and all of Northwest Georgia 
        </p>
      </div>
  */}
      <SiteNav />
    </div>
  ) 
}

export default Header;