import React, { useState } from "react";
import {  Menu, MenuItem } from "../aceternityUi/menu";
import { CategoryMenu } from "../../data/categoryMenu";
import { Link } from "react-router-dom";



const CategoryList = () => {
  const [active, setActive] = useState("Products");
  return (
    <div className="flex items-center gap-4 m-4 mx-10">
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="All Categories">
          <div className=" text-sm grid grid-cols-3 gap-10 p-4">
            {CategoryMenu?.map((value, i) => (
              <div>
                <p key={i} className="text-blackcurrent-500 font-medium mb-2">{value?.label}</p>
                {value?.subCategory?.map((item, j) => (
                  <Link to={"/"} key={j} className="block my-1 hover:bg-blackcurrent-100 p-1">{item}</Link>
                ))}
              </div>
            ))}
          </div>
        </MenuItem>
      </Menu>
      <p className="hover:font-medium hover:text-blackcurrent-500 transition-all transition-3s cursor-pointer">Computer & mobile</p>
      <p className="hover:font-medium hover:text-blackcurrent-500 transition-all transition-3s cursor-pointer">Clothing</p>
      <p className="hover:font-medium hover:text-blackcurrent-500 transition-all transition-3s cursor-pointer">Furniture</p>
      <p className="hover:font-medium hover:text-blackcurrent-500 transition-all transition-3s cursor-pointer">Fashion & beauty</p>
    </div>
  );
};

export default CategoryList;
