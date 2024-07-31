import React from 'react'
import Logo from '../common/logo'
import { Search ,ShoppingCart,Heart,UserRound} from 'lucide-react';
import { Input} from "@nextui-org/react";
import ThemeSwitch from '../common/themeSwitch';
const TopNavbar = () => {
  return (
  <div className='bg-blackcurrent-500 flex justify-between  items-center gap-4 p-2 px-10'>
    <Logo/>
    <div className='bg-white flex justify-center rounded-md  max-w-full w-2/4'>
    <Input
    className='bg-white rounded-md'
    placeholder='Search...'
          type="text"
          endContent={
            <Search  className="bg-blackcurrent-300 rounded-md p-1 text-blackcurrent-700 text-xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
    </div>
    <div className='flex items-center gap-4 '>
    <Heart  className='text-white cursor-pointer'/>
    <ShoppingCart className='text-white cursor-pointer'/>
    <UserRound  className='text-white cursor-pointer'/>
    <ThemeSwitch/>
       
    </div>
  </div>
  )
}

export default TopNavbar