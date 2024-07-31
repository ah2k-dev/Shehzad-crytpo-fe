import TopBar from "../../components/layouts/topBar"
import { Button } from "@nextui-org/react";

import React from "react";
import TopNavbar from "../../components/layouts/navbar";
import CategoryList from "../../components/layouts/categoryList";

const Home = () => {
  return (
    <div>
      <TopBar/>
      <TopNavbar/>
      <CategoryList/>
      <Button>hello</Button>
    </div>
  );
};

export default Home;
