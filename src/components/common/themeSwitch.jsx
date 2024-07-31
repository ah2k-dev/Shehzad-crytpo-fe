import React from "react";
import {Switch, VisuallyHidden, useSwitch} from "@nextui-org/react";
import { Moon ,Sun} from 'lucide-react';

const ThemeSwitchComp = (props) => {
  const {
    Component, 
    slots, 
    isSelected , 
    getBaseProps, 
    getInputProps, 
    getWrapperProps
  } = useSwitch(props);

  return (
    <div className="flex justify-center  border border-solid border-blackcurrent-600 rounded-md">
      <Component {...getBaseProps()}>
          <VisuallyHidden>
            <input {...getInputProps()} />
          </VisuallyHidden>
          <div
            {...getWrapperProps()}
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
