import React, { useEffect, useState } from "react";
import Logo from "../common/logo";
import {
  Search,
  ShoppingCart,
  Heart,
  UserRound,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  Button,
  cn,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";
import { CategoryMenu } from "../../data/categoryMenu";

const TopNavbar = ({ floating }) => {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location?.pathname]);
  
  useEffect(()=>{
    window.scrollTo(0,0)
      },[location.pathname])

  return (
   
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="scroll-box sm:px-20 bg-transparent backdrop-blur-none backdrop-saturate-100"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">

        <NavbarItem className="border-t-2 border-transparent p-2 hover:border-orange-400/60 hover:text-slate-100/70">
          <Link to={"/"}>Home</Link>
        </NavbarItem>

        <NavbarItem className="border-t-2 border-transparent p-2 hover:border-orange-400/60 hover:text-slate-100/70">
          <Link to={"/about"}>About</Link>
        </NavbarItem>

        {CategoryMenu.map((item, index) => (
          <NavbarItem key={index}>
            <div
              onMouseEnter={() => setHoveredIndex(index)} // Set the hovered dropdown
              onMouseLeave={() => setHoveredIndex(null)} // Reset the hovered dropdown
            >
              <Dropdown
                // key={i}
                placement="bottom-start"
                isOpen={hoveredIndex === index} // Open dropdown if it is hovered
                onOpenChange={() => setActive(value?.label)}
                onClose={() => setActive("")}
              >
                <DropdownTrigger className="cursor-pointer z-10">
                  <Button
                    className={cn(
                      "border-t-2 border-transparent transition-all transition-3s cursor-pointer hidden md:block p-2 text-white z-[100px]",
                      hoveredIndex === index &&
                        " border-orange-400 text-white  z-10"
                    )}
                  >
                    {item?.label}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Static Actions"
                  className="bg-zinc-800 text-white shadow-lg border-t-4 border-orange-400 mt-1"
                >
                  {item?.subCategory?.map((subValue) => (
                    <DropdownItem
                      key={subValue}
                      className="hover:text-orange-400 rounded-md"
                    >
                      <Link
                        key={subValue}
                        to={`/shop?${subValue}`}
                        className="block"
                      >
                        {subValue}
                      </Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <div
            className={cn(
              " bg-red-300 flex justify-center rounded-md w-full transition-all duration-800   ",
              // searchOpen ? "block " : "  hidden"
            )}
          >
            <Input
              className={cn(
                " rounded-md dark:bg-zinc-800 transition-all",
                searchOpen ? "w-full block" : "w-0 hidden"
              )}
              placeholder="Search Product..."
              type="text"
              endContent={
                <div
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="cursor-pointer"
                >
                  <Search className=" bg-zinc-300 rounded-md p-1 text-zinc-700 text-xl text-default-400 pointer-events-none flex-shrink-0" />
                </div>
              }
            />
            <div
              className={cn(
                "bg-zinc-300 p-1 rounded-lg cursor-pointer ",
                searchOpen ? "hidden " : "block "
              )}
              onClick={() => setSearchOpen(true)}
            >
              <Search
                onClick={() => setSearchOpen(true)}
                className="cursor-pointer bg-zinc-300 rounded-md p-1 text-zinc-800 text-xl text-default-400 pointer-events-none flex-shrink-0"
                />
                </div>
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="mt-16 bg-zinc-500/50 scroll-box">
        <NavbarMenuItem>
          <Link to={"/"}>
            <p className="p-2 my-2 text-white z-[100px] hover:text-orange-300">
              Home
            </p>
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to={"/about"}>
            <p className="p-2 my-2 text-white z-[100px] hover:text-orange-300">
              About
            </p>
          </Link>
        </NavbarMenuItem>
        {CategoryMenu.map((item, index) => (
          <NavbarMenuItem key={index}>
            
            <Accordion variant="splitted">
              <AccordionItem
                
                className="text-white ms-[-14px]"
                aria-label="Accordion 1"
                title={ item?.label}
                >
            {item?.subCategory?.map((value , j)=>(
              <Link key={j} className="block p-1 px-4 rounded-lg hover:text-orange-400">
              {value}
              </Link>
            ))}
              </AccordionItem>
        
              </Accordion>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default TopNavbar;
