import React, { useEffect } from 'react'
import Logo from '../common/logo'
import { Search ,ShoppingCart,Heart,UserRound, Facebook, Instagram, Twitter} from 'lucide-react';
import { cn, Input} from "@nextui-org/react";
import ThemeSwitch from '../common/themeSwitch';
import CategoryList from './categoryList';


const TopNavbar = ({floating}) => {
  
  return (
  <div className={cn(' relative z-30 flex justify-between  items-center gap-4 p-2 px-2 md:px-10',floating ? "bg-zinc-800" :"bg-transparent")}>
    <Logo/>
    <CategoryList/>
    <div className='bg-white flex justify-center rounded-md   w-1/4'>
    <Input
    className='bg-white rounded-md dark:bg-zinc-950'
    placeholder='Search Product...'
          type="text"
          endContent={
            <Search  className="bg-zinc-300 rounded-md p-1 text-zinc-700 text-xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
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