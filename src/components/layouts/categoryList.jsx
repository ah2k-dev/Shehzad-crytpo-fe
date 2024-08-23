import React, { useState } from "react";
import {  Menu, MenuItem } from "../aceternityUi/menu";
import { CategoryMenu } from "../../data/categoryMenu";
import { Link, useLocation } from "react-router-dom";
import { Button, cn, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";



const CategoryList = () => {
  const [active, setActive] = useState("Products");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation()
  return (
    <div>

    <div className="flex items-center gap-4 m-4 mx-2  ">
      {/* <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="All Categories">
          <div className=" text-sm grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 p-4">
            {CategoryMenu?.map((value, i) => (
              <div>
                <p key={i} className="text-zinc-500 font-medium mb-2">{value?.label}</p>
                {value?.subCategory?.map((item, j) => (
                  <Link to={"/"} key={j} className="block my-1 hover:bg-zinc-100 p-1">{item}</Link>
                ))}
              </div>
            ))}
          </div>
        </MenuItem>
      </Menu> */}
      <Link to={"/"}>
        <Button
                className={cn(
                  "transition-all transition-3s cursor-pointer hidden md:block p-2 text-white z-[100px]",
                  location?.pathname === "/" &&
                  "border-t-2 border-orange-400 text-white font-bold z-10"
                )}
                >
              Home
              </Button>
                </Link>
     {CategoryMenu?.map((value, i) => (
       <div
         onMouseEnter={() => setHoveredIndex(i)} // Set the hovered dropdown
         onMouseLeave={() => setHoveredIndex(null)} // Reset the hovered dropdown
         >
        <Dropdown
          key={i}
          placement="bottom-start"
          isOpen={hoveredIndex === i} // Open dropdown if it is hovered
          onOpenChange={() => setActive(value?.label)}
          onClose={() => setActive("")}
        >
          <DropdownTrigger className="cursor-pointer z-10">
              <Button
                className={cn(
                  "border-t-2 border-transparent transition-all transition-3s cursor-pointer hidden md:block p-2 text-white z-[100px]",
                  hoveredIndex === i &&
                    " border-orange-400 text-white  z-10"
                )}
              >
                {value?.label}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Static Actions"
              className="bg-zinc-800 text-white shadow-lg border-t-4 border-orange-400 mt-1"
              >
              {value?.subCategory?.map((subValue) => (
                <DropdownItem key={subValue} className="hover:text-orange-400 rounded-md">
                <Link key={subValue} to={`/shop?${subValue}`} className="block">
                  {subValue}
                </Link>
                </DropdownItem>
              ))}
            </DropdownMenu>
        </Dropdown>
              </div>
      ))}
    
      {/* <p className="hover:font-medium hover:text-zinc-500 transition-all transition-3s cursor-pointer hidden md:block">Furniture</p>
      <p className="hover:font-medium hover:text-zinc-500 transition-all transition-3s cursor-pointer hidden md:block">Fashion & beauty</p>
      <p className="hover:font-medium hover:text-zinc-500 transition-all transition-3s cursor-pointer hidden md:block">Clothing</p> */}
    </div>
    </div>
  );
};

export default CategoryList;
