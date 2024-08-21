import React, { useEffect } from "react";
import { Divider } from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

const DashboardNavbar = ({onopen}) => {
  const location = useLocation();
   
 
  if (location.pathname?.split("/")[3]?.split("-")?.length === 2) {
    var routeName = location.pathname?.split("/")[3]?.split("-");
  } else if (location.pathname?.split("/")[2]) {
    var routeName = location.pathname?.split("/")[2]?.split("-");
  } else {
    var routeName = location.pathname?.split("/")[1]?.split("-");
  }
  
  return (
    <div className="py-5 flex items-center gap-2 sticky top-0 bg-white z-20">
      {" "}
      <Menu size={28} onClick={onopen} className="cursor-pointer"/>
      <div>

      <p className="text-slate-500 font-semibold text-3xl capitalize">{routeName}</p>
      <Divider className="ms-1 mt-1 w-10 md:w-10 h-1 bg-zinc-500 rounded-sm" />
      </div>
    </div>
  );
};

export default DashboardNavbar;
