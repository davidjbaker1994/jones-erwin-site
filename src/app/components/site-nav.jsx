'use client'


import {useState} from "react";
import {Navbar, NavbarBrand, NavbarMenu, NavbarMenuToggle, NavbarContent} from "@nextui-org/react";

import {AcmeLogo} from "./acme-logo"
import CustomNavLink from "./custom-nav-link"
import CustomMenuLink from "./custom-menu-link"

function SiteNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //const pathName = usePathname();
  //console.log("path name", pathName);
  

  const menuItems = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: "Areas Of Practice",
      link: '/areas-of-practice',
    },
    {
      name: "Contact Us",
      link: '/contact-us',
    }
  ];

  return(
    <Navbar 
      isBordered 
      id="headerporque" 
      onMenuOpenChange={setIsMenuOpen} 
      className="border-y border-[#36454F]">
      <NavbarContent 
        className="flex-none" 
        id="my-header">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="flex-none justify-start" id="just-to-see">
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4 grow"  id="just-to-see-2" justify="start">
      {menuItems.map((item, index) => (
        <CustomNavLink
          color="primary" 
          className="w-full" 
          key={`${item}-${index}`}
          href={item.link}
          size="lg"
          >
            {item.name}
        </CustomNavLink>
      ))}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <CustomMenuLink 
            className="w-full" 
            color="primary"
            key={`${item}-${index}`}
            href={item.link}
            size="lg"
            >
             {item.name}
          </CustomMenuLink>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default SiteNav;