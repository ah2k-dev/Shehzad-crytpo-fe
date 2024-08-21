import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/layouts/sidebar'
import DashboardNavbar from '../components/layouts/dashboardNavbar'
import { useDisclosure } from '@nextui-org/react'

const DashboardLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className='flex gap-2 w-full h-screen'>
        <Sidebar isopen={isOpen} onclose={onClose}/>
        <div className='w-full md:w-4/5 px-3 '>
<DashboardNavbar onopen ={onOpen}/>
        <Outlet/>
        </div>
    </div>
  )
}

export default DashboardLayout