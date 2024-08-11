import React from 'react'
import Logo from '../common/logo'
import { Link, useLocation } from 'react-router-dom'
import { SidebarList } from '../../data/sidebarList'
import { cn } from '@nextui-org/react'
import { LogOut } from 'lucide-react'

const Sidebar = () => {
    const location = useLocation()
  return (
    <div className='bg-blackcurrent-500 w-1/5 h-screen'>
       <div className='flex flex-col gap-3 justify-between h-full'>

        <Logo/>
        <div>

        {SidebarList?.map((value , i)=>(
            
            <Link key={i} to={value?.link} className={cn('  p-3 mx-2 rounded-md my-2 text-white flex gap-2 hover:bg-blackcurrent-200 hover:text-blackcurrent-800 font-medium' ,location?.pathname == value?.link && "bg-blackcurrent-200 font-medium text-blackcurrent-800 ")}>{value?.icon}{value?.name}</Link>
        ))}
        </div>
        <p className={cn('mb-0  p-3 mx-2 rounded-md my-2 text-white flex gap-2 hover:bg-blackcurrent-200 hover:text-blackcurrent-800 font-medium' )}><LogOut /> Logout</p>
        </div>
    </div>
  )
}

export default Sidebar