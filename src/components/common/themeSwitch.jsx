import React from "react";
import {Switch, VisuallyHidden, useSwitch} from "@nextui-org/react";
import { Moon ,Sun} from 'lucide-react';
import { themeStore } from "../../stores/themeStore";

const ThemeSwitchComp = (props) => {
  const {
    Component, 
    slots, 
    isSelected , 
    getBaseProps, 
    getInputProps, 
    getWrapperProps
  } = useSwitch(props);
  const toggleTheme = themeStore((state) => state.toggleTheme)
  return (
    <div className="flex justify-center  border border-solid border-zinc-600 rounded-md hidden md:block" >
      <Component {...getBaseProps()}>
          <VisuallyHidden>
            <input {...getInputProps()} />
          </VisuallyHidden>
          <div
            {...getWrapperProps()}
            onClick={toggleTheme}
            className={slots.wrapper({
              class: [
                "w-8 h-8 mr-0",
                "flex items-center justify-center",
                "rounded-lg bg-default-100 hover:bg-default-200",
                
              ],
            })}
          >
            {isSelected ? <Sun className="text-yellow-400"/> : <Moon className="text-slate-300  "/>}
          </div>
      </Component>
      
    </div>
  )
}


export default function ThemeSwitch() {
  return <ThemeSwitchComp/>
}
