import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/layouts/sidebar'
import DashboardNavbar from '../components/layouts/dashboardNavbar'
import { useDisclosure } from '@nextui-org/react'

const DashboardLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  useEffect(()=>{
    onOpen()
  },[])
  return (
    <div className='flex gap-2 w-full h-screen bg-white dark:bg-zinc-950 dark:text-white'>
        <Sidebar isopen={isOpen} onclose={onClose}/>
        <div className='w-full md:w-4/5 px-3 h-screen overflow-y-auto scroll-box '>
        <div className=' overflow-y-auto '>
<DashboardNavbar onopen ={onOpen}/>
        </div>
        <Outlet/>
        </div>
    </div>
  )
}

export default DashboardLayout