import React, { useEffect } from "react";
import { Divider } from "@nextui-org/react";
import { useLocation } from "react-router-dom";

const DashboardNavbar = () => {
  const location = useLocation();
   
 
  if (location.pathname?.split("/")[3]?.split("-")?.length === 2) {
    var routeName = location.pathname?.split("/")[3]?.split("-");
  } else if (location.pathname?.split("/")[2]) {
    var routeName = location.pathname?.split("/")[2]?.split("-");
  } else {
    var routeName = location.pathname?.split("/")[1]?.split("-");
  }
  
  return (
    <div className="mt-5">
      {" "}
      <p className="text-slate-500 font-semibold text-3xl capitalize">{routeName}</p>
      <Divider className="ms-1 mt-1 w-0 md:w-10 h-1 bg-blackcurrent-500 rounded-sm" />
    </div>
  );
};

export default DashboardNavbar;
