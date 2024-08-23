import React from 'react'
import Logo from '../common/logo'
import { Link, useLocation } from 'react-router-dom'
import { SidebarList } from '../../data/sidebarList'
import { cn } from '@nextui-org/react'
import { LogOut, X } from 'lucide-react'

const Sidebar = ({isopen , onclose}) => {
    const location = useLocation()
 
    
  return (
    <div className={cn('md:static absolute top-0 w-72 z-30 bg-orange-500 md:w-1/5 h-screen transition-all transition-6s rounded-tr-xl rounded-br-xl ',isopen ? "translate-x-0 shadow-xl" :"translate-x-[-300px]")}>


<X className='absolute right-2 top-2 text-white cursor-pointer block md:hidden' onClick={onclose}/>

       <div className='flex flex-col gap-3 justify-between h-full'>
<div className='flex flex-col justify-center gap-10 '>
<div className='flex justify-center mt-10'>

        <Logo className={"w-44"}/>
</div>
        <div>

        {SidebarList?.map((value , i)=>(
            
            <Link key={i} to={value?.link} className={cn('  p-3 mx-2 rounded-md my-2 text-white flex gap-2 font-medium hover:bg-zinc-900' ,location?.pathname == value?.link && "bg-zinc-900 font-medium text-white ")}>{value?.icon}{value?.name}</Link>
        ))}
        </div>
</div>
        <p className={cn('mb-0  p-3 mx-2 rounded-md my-2 text-white flex gap-2 hover:bg-zinc-900  font-medium' )}><LogOut /> Logout</p>
        </div>
    </div>
  )
}

export default Sidebar