import React, { useEffect, useState } from 'react'
import Logo from '../common/logo'
import { Search ,ShoppingCart,Heart,UserRound, Facebook, Instagram, Twitter} from 'lucide-react';
import { Button, cn, Dropdown, DropdownMenu, DropdownTrigger, Input} from "@nextui-org/react";
import ThemeSwitch from '../common/themeSwitch';
import CategoryList from './categoryList';
import { useLocation } from 'react-router-dom';


const TopNavbar = ({floating}) => {
  const location = useLocation()
  const [searchOpen , setSearchOpen] = useState(false)
  
  return (
  <div className={cn(' relative z-30 flex justify-between  items-center gap-4 p-2 px-2 md:px-10',floating ? "bg-zinc-800" :"bg-transparent" ,location?.pathname !== "/" && "bg-zinc-800")}>
    <Logo/>
    <CategoryList/>
    <div className={cn(' flex justify-center rounded-md md:w-2/4   pe-1 md:pe-10' , searchOpen ? "w-2/4 md:w-1/4" :"  md:w-0")}>
    <Input
    className={cn(' rounded-md dark:bg-zinc-900 transition-all' , searchOpen ? "block " : "hidden ")}
    placeholder='Search Product...'
          type="text"
          endContent={
            <div onClick={()=>setSearchOpen(!searchOpen)} className='cursor-pointer'>
            <Search  className=" bg-zinc-300 rounded-md p-1 text-zinc-700 text-xl text-default-400 pointer-events-none flex-shrink-0" />
          </div>}
        />
         <div className={cn('bg-zinc-300 p-1 rounded-lg cursor-pointer',searchOpen ? "hidden " : "block ")} onClick={()=>setSearchOpen(true)}>

          <Search onClick={()=>setSearchOpen(true)} className="cursor-pointer bg-zinc-300 rounded-md p-1 text-zinc-800 text-xl text-default-400 pointer-events-none flex-shrink-0" />
         </div>
    </div>
    {/* <div className='flex items-center gap-4 '>
    <Facebook  className='text-white cursor-pointer hidden md:block'/>
    <Instagram className='text-white cursor-pointer hidden md:block'/>
    <Twitter  className='text-white cursor-pointer '/>
    <ThemeSwitch/>
       
    </div> */}
  </div>
  )
}

export default TopNavbar