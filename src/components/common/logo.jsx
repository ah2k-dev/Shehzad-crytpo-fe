import React from "react";
import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";
import { cn } from "@nextui-org/react";

const Logo = ({className}) => {
  return (
    <div className="text-orange-400 capitalize font-Baskervville">
      <Link to={"/"}>
      {/* <img src={logo} className={cn("w-20",className)} /> */}
      LOGO
      </Link>
    </div>
  );
};

export default Logo;
