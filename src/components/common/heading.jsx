import React from 'react'
import {Divider} from "@nextui-org/react";
const Heading = ({title}) => {
  return (
    <div className='flex  gap-5 justify-center my-10 mt-20'>
        <Divider className=" my-5 w-0 md:w-28 h-1 bg-slate-500 rounded-sm" />
        <p className='text-xl md:text-4xl font-semibold text-orange-500 uppercase'>{title}</p>
        <Divider className=" my-5 w-0 md:w-28 h-1 bg-slate-500 rounded-sm" />
        </div>
  )
}

export default Heading