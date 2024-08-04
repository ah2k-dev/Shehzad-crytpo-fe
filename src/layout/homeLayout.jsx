import React from 'react'
import { Outlet } from "react-router-dom";
import TopNavbar from "../components/layouts/navbar";
import CategoryList from "../components/layouts/categoryList";
import Footer from "../components/layouts/footer";
import TopBar from "../components/layouts/topBar"

const HomeLayout = () => {
  return (
    <div className='bg-white dark:bg-zinc-950 dark:text-white'>
        <TopBar/>
      <TopNavbar/>
      <CategoryList/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomeLayout