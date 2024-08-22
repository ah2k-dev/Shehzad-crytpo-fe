import React from 'react'
import Logo from '../common/logo'
import { MoveRight,Facebook ,Instagram ,Twitter} from 'lucide-react';
import { Divider, Input } from '@nextui-org/react';

const Footer = () => {
  return (
    <div className='bg-zinc-800 p-10 sticky bottom-0 '>
        
    <div className='  grid sm:grid-cols-2 lg:grid-cols-4 gap-3 my-5'>
        <div className='flex flex-col gap-3'>
            <Logo/>
            <p className='text-white'>(+109)345423687</p>
            <p className='text-white'>4517 Washington Ave. Manchester, Kentucky 39495</p>
            <p className='text-white'>info@abc.com</p>
        </div>
        <div className='flex flex-col gap-3'>
            
            <p className='text-orange-400 font-medium text-xl'>Categories</p>
            <p className='text-white cursor-pointer hover:underline'>Electronics</p>
            <p className='text-white cursor-pointer hover:underline'>Fashion & beauty</p>
            <p className='text-white cursor-pointer hover:underline'>Furniture</p>
            <p className='text-white cursor-pointer hover:underline'>Clothing</p>
            <p className='text-white cursor-pointer hover:underline'>Computer & mobile</p>
            <p className='text-yellow-300 flex gap-5 cursor-pointer hover:underline'> Browse All <MoveRight /></p>
        </div>
        <div className='flex flex-col gap-3'>
            
            <p className='text-orange-400 font-medium text-xl'>Quick Links</p>
            <p className='text-white cursor-pointer hover:underline'>Home</p>
            <p className='text-white cursor-pointer hover:underline'>Shop</p>
            <p className='text-white cursor-pointer hover:underline'>Contact us</p>
            <p className='text-white cursor-pointer hover:underline'>FAQs</p>
            </div>
        <div className='flex flex-col gap-3'>
            
            <p className='text-orange-400 font-medium text-xl '>Subscribe to our newsletter</p>
            <Input
    className='bg-zinc-900 rounded-md'
    placeholder='Enter your email...'
          type="text"
          endContent={
            <MoveRight  className="bg-zinc-300 rounded-md p-1 text-zinc-700 text-xl text-default-400 cursor-pointer flex-shrink-0" />
          }
        />
        <div className='flex gap-3 justify-end mt-3'>
        <Facebook  className='cursor-pointer text-white'/>
        <Instagram className='cursor-pointer text-white'/>
        <Twitter className='cursor-pointer text-white'/>
        </div>
            </div>
    </div>
    <Divider className='h-[0.1rem] mb-8 bg-zinc-700'/>
   
    <span className='text-white text-center '>Copyright © 2023 ABC All Rights Reserved.</span>
   
    </div>
  )
}

export default Footer