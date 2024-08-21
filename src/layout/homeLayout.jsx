import React, { useState } from 'react'
import { Outlet } from "react-router-dom";
import TopNavbar from "../components/layouts/navbar";
import CategoryList from "../components/layouts/categoryList";
import Footer from "../components/layouts/footer";
import TopBar from "../components/layouts/topBar"
import { themeStore } from '../stores/themeStore';
import { cn } from '@nextui-org/react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const HomeLayout = () => {
  const theme = themeStore((state) => state.theme)
  const { scrollYProgress } = useScroll();
 
  const [visible, setVisible] = useState(false);
 
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();
 
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });
  return (
    <div className='bg-white dark:bg-zinc-950 dark:text-white'>
      <div className={cn('relative z-10', theme === "light" ?"bg-white" :"bg-zinc-900")}>
<div>
<TopBar/>
      <TopNavbar/>
      {/* <CategoryList/> */}
<AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "w-screen  fixed top-0  dark:border-white/[0.2]  dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000]"
          
        )}
      >

        <TopBar/>
      <TopNavbar floating={true}/>
      {/* <CategoryList/> */}
      </motion.div>
      </AnimatePresence>
</div>
        <Outlet/>
      </div>
        <Footer/>
    </div>
  )
}

export default HomeLayout