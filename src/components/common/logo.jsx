import React from "react";
import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="text-orange-400 capitalize font-Baskervville">
      <Link to={"/"}>
      <img src={logo} width={100} />
      </Link>
    </div>
  );
};

export default Logo;
