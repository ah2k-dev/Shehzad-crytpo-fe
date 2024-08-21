import React from 'react'
import Logo from '../common/logo'
import { Link, useLocation } from 'react-router-dom'
import { SidebarList } from '../../data/sidebarList'
import { cn } from '@nextui-org/react'
import { LogOut, X } from 'lucide-react'

const Sidebar = ({isopen , onclose}) => {
    const location = useLocation()
    console.log(isopen);
    
  return (
    <div className={cn('md:static absolute top-0 w-72 z-30 bg-zinc-500 md:w-1/5 h-screen transition-all transition-6s',isopen ? "translate-x-0 shadow-xl" :"translate-x-[-300px]")}>


<X className='absolute right-2 top-2 text-white cursor-pointer' onClick={onclose}/>

       <div className='flex flex-col gap-3 justify-between h-full'>

        <Logo/>
        <div>

        {SidebarList?.map((value , i)=>(
            
            <Link key={i} to={value?.link} className={cn('  p-3 mx-2 rounded-md my-2 text-white flex gap-2 hover:bg-zinc-200 hover:text-zinc-800 font-medium' ,location?.pathname == value?.link && "bg-zinc-200 font-medium text-zinc-800 ")}>{value?.icon}{value?.name}</Link>
        ))}
        </div>
        <p className={cn('mb-0  p-3 mx-2 rounded-md my-2 text-white flex gap-2 hover:bg-zinc-200 hover:text-zinc-800 font-medium' )}><LogOut /> Logout</p>
        </div>
    </div>
  )
}

export default Sidebar