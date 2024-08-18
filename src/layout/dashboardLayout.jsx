import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/layouts/sidebar'
import DashboardNavbar from '../components/layouts/dashboardNavbar'

const DashboardLayout = () => {
  return (
    <div className='flex gap-2 w-full'>
        <Sidebar/>
        <div className='w-4/5 px-3'>
<DashboardNavbar/>
        <Outlet/>
        </div>
    </div>
  )
}

export default DashboardLayout